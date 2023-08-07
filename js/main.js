$( document ).ready(function() {
	
	let $randomnbr = $('.nbr');
	let $timer = 30;
	let $data = 0;
	let index;
	let change;
	let letters = ["S", "a", "l", "i", "m", "h", "a", "n", " ", "K", "I", "Z", "I", "L", "I", "R", "M", "A", "K"];
	
	$randomnbr.each(function() {
		change = Math.round( Math.random() * 100 );
		$( this ).attr('data-change', change);
	})
	
	function random() {
		return Math.round( Math.random() * 9 );
	}
	
	function select() {
		return Math.round( Math.random() * $randomnbr.length + 1 );
	}
	
	function value() {
		$('.nbr:nth-child(' + select() + ')').html('' + random() + '');
		$('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
		$data++;
	
		$randomnbr.each(function() {
			if(parseInt($( this ).attr('data-number')) > parseInt($( this ).attr('data-change'))) {
				index = $('.ltr').index( this );
				$( this ).html(letters[index]);
				$( this ).removeClass('nbr');
			}
		})
	}
	
	$it = setInterval(value, $timer);
   
	
	})
    var Text = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      Text.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-words');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new Text(elements[i], JSON.parse(toRotate), period);
          }
        }
      };
