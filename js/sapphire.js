$(window).on('load', function () 
{
	$('.selectpicker').selectpicker({});


});

$(document).ready(function()
{

	//var scrollOn = ;

	//var $elems = $("html, body");
	//var delta = 0;
    //
	//$(document).on("mousemove", function(e) {
	//	var h = $(window).height();
	//	var y = e.clientY - h / 2;
	//	delta = y * 0.1;
	//});
    //
	//$(window).on("blur mouseleave", function() {
	//	delta = 0;
	//});
    //
	//(function f() {
	//	if(delta) {
	//		$elems.scrollTop(function(i, v) {
	//			return v + delta;
	//		});
	//	}
	//	webkitRequestAnimationFrame(f);
	//})();


	$.getJSON("items.json", function(json){

		//$("img[src*='image/blank.png']").each(function(index) {
		//	const imgContainer = $(this).parent().parent();
		//	$(this).attr("src", json.items[index].image);
		//	imgContainer.find('h3').text(json.items[index].name);
		//	imgContainer.find('p').text("£"+json.items[index].price);

		//var div = $.innerHTML(div.id="myProducts");


		//$("img[div]").each(function(index) {
		//	const imgContainer = $(this).parent().parent();
		//	$(this).attr("src", json.items[index].image);
		//	text(json.items[index].name);
		//	text("£"+json.items[index].price);


			var myItems = document.getElementById("myProducts");
			myItems.style.overflowY="auto";
			myItems.style.height="600px";
			var items = json.items;
		    var html2 = "";
		    var p = document.createElement("p");
			//const filtering = $(this).parent().parent();
			//var category = filtering.find('body').element.id;
            var category = document.getElementById("filter").innerHTML;
			for(var i = 0; i < items.length; i++) {
				if (items[i].category == category) {
					var html =
						'<div class = "col-md-4">' +
						'<div class ="product">' +
						'<a><img src= "' + items[i].image + '" class="center-block img-responsive"></a>' +
						'<div class="name"><p class="text-center">' + items[i].name + '</p></div>' +
						'<div class="price"><p class="text-center">£' + items[i].price + '</p></div>' +
						'</div>' +
						'</div>'

					html2 += html;


				}
			}

		myItems.innerHTML = html2;



			//}

		});



	//var  getid = function(String){
    //
	//	chosenid = String;
    //
	//};
    //
	//var categorysearch = function (sender) {
	//	var category = $.(sender).text();
	//	var html3;
	//	if (category) {
	//		$.getJSON("items.json", function (json) {
	//			html3 = "";
	//			$.each(json.items, function (index, data) {
	//				if (data.category == category) {
	//					html3 += data.name + "\n";
	//				}
	//			});
	//			alert(html3);
	//		});
	//	}
	//};
    //
	//categorysearch();
//
		//           $xi.parent().parent().find('p').text(data[randItems[i+3]].description.split(".")[0]);

});

//<div class="col-md-4">
//<div class="product">
//<a><img src="image/blank.png" class="center-block img-responsive"></a>
//<h3 class="text-center">A title</h3></div>
//<p class="text-center">From £579.99</p>
//<button type="button" class="btn btn-danger center-block" data-toggle="modal" data-target="#exampleModal">View</button>
//</div>
//</div>