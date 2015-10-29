$(window).on('load', function () 
{
	$('.selectpicker').selectpicker({});


});

$(document).ready(function()
{
	$.getJSON("items.json", function(json){

		$("img[src*='image/blank.png']").each(function(index) {
			const imgContainer = $(this).parent().parent();
			$(this).attr("src", json.items[index].image);
			imgContainer.find('h3').text(json.items[index].name);
			imgContainer.find('p').text("£"+json.items[index].price);

		});
//
		//           $xi.parent().parent().find('p').text(data[randItems[i+3]].description.split(".")[0]);
	})

});
