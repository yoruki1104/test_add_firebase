$(document).ready(function() {
	$('body').css('display', 'none');
	$('body').fadeIn(500); //一開始淡入
	$('a.link').click(function(event) { //點選 class 為 link 的 a 元件時觸發
	 event.preventDefault(); //取消事件預設動作
	 newLocation = this.href;
	 $('body').fadeOut(500, newpage); //點選後淡出
	});
	
	function newpage() {
	 window.location = newLocation;
	}
   });
   
   $(document).ready(function() {
	$('.store_info').css('display', 'none');
	$('.store_info').fadeIn(3000); //一開始淡入
	
	});



$(document).ready(function() {
    $(".hamberger").click(function() {
      $(".menu").toggleClass("menu-active");
      $(".hamberger .top").toggleClass("hamberger-top");
      $(".hamberger .center").toggleClass("hamberger-center");
      $(".hamberger .bottom").toggleClass("hamberger-bottom");
    });
  });
  
  $(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
    }	
    var accordion = new Accordion($('#accordion'), false);
});


$(function(){
    var email = $("#email");
    var name = $("#name");
    var surname = $("#surname");
    var tel = $("#tel");

    function validate(field){
        if(field.val().length === 0){
            field.removeClass().addClass("error");
            field.next().removeClass().addClass("icon-warning-sign");
        }else{
            field.removeClass().addClass("success");
            field.next().removeClass().addClass("icon-ok");
        }
        return field;
    }

    $('input').blur(function(){
        validate($(this));
    });

    $("button").on("click" , function(){
        validate(email);
        validate(name);
        validate(surname);
        validate(tel);
        if($(email).val().length === 0 || $(name).val().length === 0||$(surname).val().length === 0 || $(tel).val().length === 0)
            $(this).removeClass().addClass("submit-error");
        else{
            $(this).removeClass().addClass("submit-success");
        }
        window.setTimeout(function(){
            console.log("done");
            $("button").removeClass();
        }, 3000)
        return false;
    });
    
});



