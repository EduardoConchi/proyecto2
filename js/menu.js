$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav.ordenador').animate({
				left: '70%'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav.ordenador').animate({
				left: '-100%'
			});
		}
 
	});
 
};