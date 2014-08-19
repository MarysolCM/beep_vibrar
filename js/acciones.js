//JavaScript
	
$(document).ready(function(e){	
	document.addEventListener("deviceready",function(){
    $('#beep').tap (function() //se utiliza la funcion tap por que en los moviles 
	{navigator.notification.beep(1);//no existe el click sino tap, arrastre, selección entre otros.
	});//tap del beep
	$('#vibrar').tap (function()
	{navigator.notification.vibrate(1000);
	});	//tap del vibrate
	},false); //deviceready
});//ready