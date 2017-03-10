//Variables
var Activado = true;
var intervalo;
$(document).ready(function (e) {
	console.log($('.Menu > ul > li').css('top'));
	$("#lenguaje, #Idiomas").mouseover(function(e)
	{
		$("#lenguaje").css({'background-color': 'black'})
		$("#Idiomas").css({"opacity":"1", "transform": "translateY(0px)", "visibility": "visible"})
	})
	$("#lenguaje, #Idiomas").mouseout(function(e)
	{
		$("#Idiomas").css({"opacity":"0", "transform": "translateY(50px)", "visibility": "hidden"})
		$("#lenguaje").css({'background-color': 'rgba(0,0,0,0)'})
	})
	
	$("#menu-toggle").on("click", function(e)
	{
		var Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+((Math.round(Math.random() * 90) + 10)) * -1+'deg)';
		$('#13').css({'transition': 'transform 0.7s 0s, opacity 0s 0.5s','transform': Valor+ ' scale(0)', opacity: 0});

		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#8').css({'transition': 'transform 0.7s 0.15s, opacity 0s 0.65s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#14').css({'transition': 'transform 0.7s 0.15s, opacity 0s 0.65s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+((Math.round(Math.random() * 90) + 10)) * -1+'deg)';
		$('#18').css({'transition': 'transform 0.7s 0.15s, opacity 0s 0.65s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#12').css({'transition': 'transform 0.7s 0.15s, opacity 0s 0.65s','transform': Valor+ ' scale(0)', opacity: 0});
		
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#3').css({'transition': 'transform 0.7s 0.3s, opacity 0s 0.75s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+((Math.round(Math.random() * 90) + 10)) * -1+'deg)';
		$('#7').css({'transition': 'transform 0.7s 0.3s, opacity 0s 0.75s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#9').css({'transition': 'transform 0.7s 0.3s, opacity 0s 0.75s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+((Math.round(Math.random() * 90) + 10)) * -1+'deg)';
		$('#11').css({'transition': 'transform 0.7s 0.3s, opacity 0s 0.75s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#15').css({'transition': 'transform 0.7s 0.3s, opacity 0s 0.75s','transform': Valor+ ' scale(0)', opacity: 0});
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+((Math.round(Math.random() * 90) + 10)) * -1+'deg)';
		
		$('#17').css({'transition': 'transform 0.7s 0.3s, opacity 0s 0.75s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#19').css({'transition': 'transform 0.7s 0.3s, opacity 0s 0.75s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#23').css({'transition': 'transform 0.7s 0.3s, opacity 0s 0.75s','transform': Valor+ ' scale(0)', opacity: 0});
		
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+((Math.round(Math.random() * 90) + 10)) * -1+'deg)';
		$('#2').css({'transition': 'transform 0.7s 0.45s, opacity 0s 0.9s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#4').css({'transition': 'transform 0.7s 0.45s, opacity 0s 0.9s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+((Math.round(Math.random() * 90) + 10)) * -1+'deg)';
		$('#6').css({'transition': 'transform 0.7s 0.45s, opacity 0s 0.9s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#10').css({'transition': 'transform 0.7s 0.45s, opacity 0s 0.9s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+((Math.round(Math.random() * 90) + 10)) * -1+'deg)';
		$('#16').css({'transition': 'transform 0.7s 0.45s, opacity 0s 0.9s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#20').css({'transition': 'transform 0.7s 0.45s, opacity 0s 0.9s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#22').css({'transition': 'transform 0.7s 0.45s, opacity 0s 0.9s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+((Math.round(Math.random() * 90) + 10)) * -1+'deg)';
		$('#24').css({'transition': 'transform 0.7s 0.45s, opacity 0s 0.9s','transform': Valor+ ' scale(0)', opacity: 0});
		
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#1').css({'transition': 'transform 0.7s 0.6s, opacity 0s 1s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#5').css({'transition': 'transform 0.7s 0.6s, opacity 0s 1s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+((Math.round(Math.random() * 90) + 10)) * -1+'deg)';
		$('#21').css({'transition': 'transform 0.7s 0.6s, opacity 0s 1s','transform': Valor+ ' scale(0)', opacity: 0});
		
		Valor = 'rotate3d('+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+Math.round(Math.random() * 10) + 1+', '+(Math.round(Math.random() * 90) + 10)+'deg)';
		$('#25').css({'transition': 'transform 0.7s 0.6s, opacity 0s 1s','transform': Valor+ ' scale(0)', opacity: 0});
		
		CambiarForma();
		
		/*
		if ($('.Menu').css('top') == (-window.innerHeight + 'px') || $('.Menu').css('top') == (0 + 'px'))
		{
			intervalo = setInterval('VerificarOpacidad()', 100);
			
			
			if (Activado)
			{
				$('.Menu').css({'opacity': '0', 'top': '100vh'});
			}
			else
			{
				$('.Menu').css({'opacity': '1', 'top': '0vh'});
			}
		}
		*/
	})
	
});
function VerificarOpacidad()
{
	if ($('.Menu').css('top') == (window.innerHeight + 'px'))
	{
		$('.Menu').css({'transition': 'top 0s, opacity 1s','top': '-100vh'});
		$('.Menu').css({'transition': 'top 1s, opacity 1s'});
		clearInterval(intervalo);
	}
	if ($('.Menu').css('top') == (0 + 'px')) 
	{
		clearInterval(intervalo);
	}
}
function CambiarForma() {
	Activado = !Activado;
	if (!Activado) 
	{
		$("#menu-toggle div:last-child").css({"transform": "rotate(-45deg) translateX(4px) translateY(-5px)"});
		$("#menu-toggle div:nth-child(2)").css({"opacity": "0"});
		$("#menu-toggle div:first-child").css({"transform": "rotate(45deg) translateX(4px) translateY(4px)"});
	}
	else
	{
		$("#menu-toggle div:first-child").css({"transform": "rotate(0) translateX(0) translateY(0)"});
		$("#menu-toggle div:nth-child(2)").css({"opacity": "1"});
		$("#menu-toggle div:last-child").css({"transform": "rotate(0) translateX(0) translateY(0)"});
	}
}
$(document).scroll(function(e)
{
	if (scrollY < 1300) {
		$(".uno").css({"transform": "translate3d(0,"+(scrollY - 600)/2+"px,0)"});
	}
	if (scrollY > 1300) {
	$(".dos").css({"transform": "translate3d(0,"+(scrollY + 700)/2+"px,0)"});
	}
	console.log(scrollY);
})