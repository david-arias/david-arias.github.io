/* * * MAIN JS * * */

(function() {
	var container = document.getElementById( 'port-wrap' ),
		trigger = container.querySelector( 'button.trigger' );

	function toggleContent() {
		if( classie.has( container, 'container--open' ) ) {
			classie.remove( container, 'container--open' );
			classie.remove( trigger, 'trigger--active' );
			window.addEventListener( 'scroll', noscroll );
		}
		else {
			classie.add( container, 'container--open' );
			classie.add( trigger, 'trigger--active' );
			window.removeEventListener( 'scroll', noscroll );
		}
	}

	function noscroll() {
		window.scrollTo( 0, 0 );
	}

	// reset scrolling position
	document.body.scrollTop = document.documentElement.scrollTop = 0;

	// disable scrolling
	window.addEventListener( 'scroll', noscroll );

	trigger.addEventListener( 'click', toggleContent );

	// For Demo purposes only (prevent jump on click)
	[].slice.call( document.querySelectorAll('.items-wrap a') ).forEach( function(el) { el.onclick = function() { return false; } } );
})();

/* * * open proyects * * */

$(document).ready(function(){

	/*function removeAllTrrg() {
		$('a.prTrgr1').removeClass ('proy-active');
		$('a.prTrgr2').removeClass ('proy-active');
		$('a.prTrgr3').removeClass ('proy-active');
		$('a.prTrgr4').removeClass ('proy-active');
		$('a.prTrgr5').removeClass ('proy-active');
		$('a.prTrgr6').removeClass ('proy-active');
		$('a.prTrgr7').removeClass ('proy-active');
		$('a.prTrgr8').removeClass ('proy-active');
		$('a.prTrgr9').removeClass ('proy-active');
		$('a.prTrgr10').removeClass ('proy-active');
		$('a.prTrgr11').removeClass ('proy-active');
		$('a.prTrgr12').removeClass ('proy-active');
		return false;
	};*/
	
	function showOver() {
		$(".overlayProyect").show();
		/*$(".infoPrWrap").show();*/
	};


	function noscroll() {
			window.scrollTo( 0, 0 );
		}

	$('.prTrgr1').click(function(){
		// removeAllTrrg();
		showOver();
		$(".infoPrWrap1").show();
		$('.prTrgr1').addClass ('proy-active');
		$('.layout-switch').addClass ('noScroll');
		

		window.addEventListener( 'scroll', noscroll );
	});
	$('.prTrgr2').click(function(){
		// removeAllTrrg();
		showOver();
		$(".infoPrWrap2").show();
		$('.prTrgr2').addClass ('proy-active');
		$('.layout-switch').addClass ('noScroll');

		window.addEventListener( 'scroll', noscroll );
	});
	$('.prTrgr3').click(function(){
		// removeAllTrrg();
		showOver();
		$(".infoPrWrap3").show();
		$('.prTrgr3').addClass ('proy-active');
		$('.layout-switch').addClass ('noScroll');

		window.addEventListener( 'scroll', noscroll );
	});
	$('.prTrgr4').click(function(){
		// removeAllTrrg();
		showOver();
		$(".infoPrWrap4").show();
		$('.prTrgr4').addClass ('proy-active');
		$('.layout-switch').addClass ('noScroll');

		window.addEventListener( 'scroll', noscroll );
	});
	$('.prTrgr5').click(function(){
		// removeAllTrrg();
		showOver();
		$(".infoPrWrap5").show();
		$('.prTrgr5').addClass ('proy-active');
		$('.layout-switch').addClass ('noScroll');

		window.addEventListener( 'scroll', noscroll );
	});
	$('.prTrgr6').click(function(){
		// removeAllTrrg();
		showOver();
		$(".infoPrWrap6").show();
		$('.prTrgr6').addClass ('proy-active');
		$('.layout-switch').addClass ('noScroll');

		window.addEventListener( 'scroll', noscroll );
	});
	$('.prTrgr7').click(function(){
		// removeAllTrrg();
		showOver();
		$(".infoPrWrap7").show();
		$('.prTrgr7').addClass ('proy-active');
		$('.layout-switch').addClass ('noScroll');

		window.addEventListener( 'scroll', noscroll );
	});
	$('.prTrgr8').click(function(){
		// removeAllTrrg();
		showOver();
		$(".infoPrWrap8").show();
		$('.prTrgr8').addClass ('proy-active');
		$('.layout-switch').addClass ('noScroll');

		window.addEventListener( 'scroll', noscroll );
	});
	$('.prTrgr9').click(function(){
		// removeAllTrrg();
		showOver();
		$(".infoPrWrap9").show();
		$('.prTrgr9').addClass ('proy-active');
		$('.layout-switch').addClass ('noScroll');

		window.addEventListener( 'scroll', noscroll );
	});
	$('.prTrgr10').click(function(){
		// removeAllTrrg();
		showOver();
		$(".infoPrWrap10").show();
		$('.prTrgr10').addClass ('proy-active');
		$('.layout-switch').addClass ('noScroll');

		window.addEventListener( 'scroll', noscroll );
	});
	$('.prTrgr11').click(function(){
		// removeAllTrrg();
		showOver();
		$(".infoPrWrap11").show();
		$('.prTrgr11').addClass ('proy-active');
		$('.layout-switch').addClass ('noScroll');

		window.addEventListener( 'scroll', noscroll );
	});
	$('.prTrgr12').click(function(){
		// removelTrrg();
		showOver();
		$(".infoPrWrap12").show();
		$('.prTrgr12').addClass ('proy-active');
		$('.layout-switch').addClass ('noScroll');

		window.addEventListener( 'scroll', noscroll );
	});
	/* close */
	$('.closeTrigger1').click(function(){
		$('.prTrgr1').removeClass ('proy-active');
		$(".overlayProyect").hide();
		$(".infoPrWrap").hide();
		$('.layout-switch').removeClass ('noScroll');
		window.removeEventListener( 'scroll', noscroll );
		return false;
		// alert("click");
	});
	$('.closeTrigger2').click(function(){
		$('.prTrgr2').removeClass ('proy-active');
		$(".overlayProyect").hide();
		$(".infoPrWrap").hide();
		$('.layout-switch').removeClass ('noScroll');
		window.removeEventListener( 'scroll', noscroll );
		return false;
		// alert("click");
	});
	$('.closeTrigger3').click(function(){
		$('.prTrgr3').removeClass ('proy-active');
		$(".overlayProyect").hide();
		$(".infoPrWrap").hide();
		$('.layout-switch').removeClass ('noScroll');
		window.removeEventListener( 'scroll', noscroll );
		return false;
		// alert("click");
	});
	$('.closeTrigger4').click(function(){
		$('.prTrgr4').removeClass ('proy-active');
		$(".overlayProyect").hide();
		$(".infoPrWrap").hide();
		$('.layout-switch').removeClass ('noScroll');
		window.removeEventListener( 'scroll', noscroll );
		return false;
		// alert("click");
	});
	$('.closeTrigger5').click(function(){
		$('.prTrgr5').removeClass ('proy-active');
		$(".overlayProyect").hide();
		$(".infoPrWrap").hide();
		$('.layout-switch').removeClass ('noScroll');
		window.removeEventListener( 'scroll', noscroll );
		return false;
		// alert("click");
	});
	$('.closeTrigger6').click(function(){
		$('.prTrgr6').removeClass ('proy-active');
		$(".overlayProyect").hide();
		$(".infoPrWrap").hide();
		$('.layout-switch').removeClass ('noScroll');
		window.removeEventListener( 'scroll', noscroll );
		return false;
		// alert("click");
	});
	$('.closeTrigger7').click(function(){
		$('.prTrgr7').removeClass ('proy-active');
		$(".overlayProyect").hide();
		$(".infoPrWrap").hide();
		$('.layout-switch').removeClass ('noScroll');
		window.removeEventListener( 'scroll', noscroll );
		return false;
		// alert("click");
	});
	$('.closeTrigger8').click(function(){
		$('.prTrgr8').removeClass ('proy-active');
		$(".overlayProyect").hide();
		$(".infoPrWrap").hide();
		$('.layout-switch').removeClass ('noScroll');
		window.removeEventListener( 'scroll', noscroll );
		return false;
		// alert("click");
	});
	$('.closeTrigger9').click(function(){
		$('.prTrgr9').removeClass ('proy-active');
		$(".overlayProyect").hide();
		$(".infoPrWrap").hide();
		$('.layout-switch').removeClass ('noScroll');
		window.removeEventListener( 'scroll', noscroll );
		return false;
		// alert("click");
	});
	$('.closeTrigger10').click(function(){
		$('.prTrgr10').removeClass ('proy-active');
		$(".overlayProyect").hide();
		$(".infoPrWrap").hide();
		$('.layout-switch').removeClass ('noScroll');
		window.removeEventListener( 'scroll', noscroll );
		return false;
		// alert("click");
	});
	$('.closeTrigger11').click(function(){
		$('.prTrgr11').removeClass ('proy-active');
		$(".overlayProyect").hide();
		$(".infoPrWrap").hide();
		$('.layout-switch').removeClass ('noScroll');
		window.removeEventListener( 'scroll', noscroll );
		return false;
		// alert("click");
	});
	$('.closeTrigger12').click(function(){
		$('.prTrgr12').removeClass ('proy-active');
		$(".overlayProyect").hide();
		$(".infoPrWrap").hide();
		$('.layout-switch').removeClass ('noScroll');
		window.removeEventListener( 'scroll', noscroll );
		return false;
		// alert("click");
	});

});






