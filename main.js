//Type Writer

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 100) || 2500;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 0;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
        document.body.appendChild(css);
    };

    AOS.init();


//Message Box

    function validate(){				
        var name = document.getElementById("fn1").value;			
        var email = document.getElementById("fe1").value;
        var subject = document.getElementById("fs1").value;
        var message = document.getElementById("fm1").value;	
        

        if(name == "" || name == null || name ==" "){
            document.getElementById("fn").innerHTML= "Please, Enter Valid Name"; 
            document.getElementById('fn1').style.borderColor = "red";
            return false;
        }else {
            document.getElementById('fn1').style.borderColor = "green";
            document.getElementById("fn").innerHTML= "";
        }

        if(!/^([a-zA-Z0-9_\.-]+)@([a-z0-9]+).([a-z]{2,5})(.[a-z]{2,5})$/.test(email)){
            document.getElementById("fe").innerHTML= "Please, Enter Valid E-Mail Address";
            document.getElementById('fe1').style.borderColor = "red";
            return false;
        }else {
            document.getElementById('fe1').style.borderColor = "green";
            document.getElementById("fe").innerHTML= "";
        }

        if(subject == "" || subject == null || subject ==" "){
            document.getElementById("fs").innerHTML= "Please, Enter Valid Subject";
            document.getElementById('fs1').style.borderColor = "red";
            return false;
        }else {
            document.getElementById('fs1').style.borderColor = "green";
            document.getElementById("fs").innerHTML= "";
        }

        if(message == "" || message == null || message ==" "){
            document.getElementById("fm").innerHTML= "Please, Enter Valid Message";
            document.getElementById('fm1').style.borderColor = "red";
            return false;
        }else {
            document.getElementById('fm1').style.borderColor = "green";
            document.getElementById("fm").innerHTML= "";
        }
        return true;
    }