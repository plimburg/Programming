$("#rugrats").hide();
$(document).ready(function(){
	$("#tazchange").click(function(){
		$("#taz").show();
		$("#rugrats").hide();
	});
	$("#rugratschange").click(function(){
		$("#taz").hide();
		$("#rugrats").show();
	});
});