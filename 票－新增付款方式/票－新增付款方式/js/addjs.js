$(function(){
	
})
function ycxx(){
	$("#ycxxa").addClass("now");
	$("#gmsma").removeClass("now");
	$("#fksma").removeClass("now");
	
	normal();
	$("#ycxxDiv").css("display","block");
}
function gmsm(){
	$("#ycxxa").removeClass("now");
	$("#gmsma").addClass("now");
	$("#fksma").removeClass("now");
	
	normal();
	$("#gmsmDiv").css("display","block");
}
function fksm(){
	$("#ycxxa").removeClass("now");
	$("#gmsma").removeClass("now");
	$("#fksma").addClass("now");
	normal();
	$("#fksmDiv").css("display","block");
}

function normal(){
	$("#ycxxDiv").css("display","none");
	$("#gmsmDiv").css("display","none");
	$("#fksmDiv").css("display","none");
}
