var id = 4
function add() {
	var newCase = $('#newCase').val()
	$('<label for="' + id + '"class="label" id="' + id + '"><input type="checkbox" id="'+ id + '"><span>'+ newCase  + '</span><a href="#" class="delete" id="' + id + '"></a></label>').appendTo('.dynamic-inputs');
	id++
	
}
/*function caseColor() {
	var color = 0
	for (var i = 0; i <= $('.label').length - 1; i++) {
		if ($(".label").eq(i).is(':visible')){
			$(".label").eq(i).css('background-color', 'rgb(' + (192 - (color * 16)) + ',' + (232 - (color * 16)) + ',' + (248 - (color * 16)) + ')')
			color++
		}
	}
}*/

$('.dynamic-inputs').on('click','.delete',function(){
	$('.label#'+ this.id).remove()
});

$('#completed').on('click',function(){
	$("input:checkbox:checked").parent('label').slideDown("fast").on('click',function(){
		$('.label#'+ this.id).slideUp('fast')
	});
    $("input:checkbox:not(:checked)").parent('label').slideUp("fast");
});

$('#active').on('click',function(){
	$("input:checkbox:not(:checked)").parent('label').slideDown("fast").on('click',function(){
		$('.label#'+ this.id).slideUp('fast')
	});
	$("input:checkbox:checked").parent('label').slideUp("fast");
});

$('#all').on('click',function(){
	$("input").parent('label').slideDown("fast").unbind('click');
});

$('#clear').on('click',function(){
	$(".dynamic-inputs > label").each( function() {
    	$("label[for="+$("input:checkbox:checked").attr( "id")+"]").remove();
	});
});