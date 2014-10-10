
$(".view").slideUp(0)
$(".content").hide()

$(".link").click(function(e){
	$(".content").show()
	$("#content-wrapper").removeClass()
	$("#headline").removeClass()
	$(".view").slideUp();
	$("#content-wrapper").addClass($(e.target).attr("linkColor"))
	$("#headline").addClass($(e.target).attr("linkColor"))
	$("."+$(e.target).attr("linkId")).slideDown(1000)

});

$(".gimage").click(function(e){
	$(".overlay").addClass("big");
	$(".backdrop").addClass("big");
	$(".gallery").html("<img id=\"displayed\" src=\""+$(e.target).attr("imgSrc")+"\">")
});

$(".gallery,.overlay").click(function(e){

	$(".overlay").removeClass("big");
	$(".backdrop").removeClass("big");
	$(".gallery").html("");

})


