// function -- for---


/*$.ajax({
	url:"https://api.github.com/repos/chef/chef/issues",
	dataType:"json"
}).done(function(results){
	results.forEach(function(result){
		console.log(result);
		document.write("<p>" + result.title + "</p>");
		/*var imageUrl = result.avatar_url;
		var image = new Image();
		image.src = imageUrl;

		document.body.appendChild(image);*/
//	})
//});
$.ajax({
	url:"http://infinigag.eu01.aws.af.cm/trending/0",
	dataType:"json"

}).done(function(result){
	console.log(result);

	result.data.forEach(function(item){
		document.write("<h3 style='color:green'>"+ item.caption + "</h3>");
		var imageUrl = item.images.large;
		var image = new Image();
		image.src = imageUrl;

		document.body.appendChild(image);

		document.write("<p>Link:"+ item.link + "</p>");

		//document.body.appendChild("<video width='320' height='240' controls><source src='" + item.images.normal + "'></video>")
		/*document.write("<p>" + item.caption + "</p>");
		var imageUrl = item.images.normal;
		var image = new Image();
		image.src = imageUrl;

		document.body.appendChild(image);*/
	})
})


