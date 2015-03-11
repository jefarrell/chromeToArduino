///---DOC READY---/////////////////////////////////

 	
console.log("page loaded");


////////////////////////////////////////////////////
///---Send signal out on mouse click---////////////
//////////////////////////////////////////////////

document.addEventListener("click", function(event){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://localhost:8080", true);
		xhr.onreadystatechange = function() {
		  if (xhr.readyState == 4) {
		  }
		}
		xhr.send();
		console.log("mouse entered");
});




////////////////////////////////////////////////////////////////////////////////
///---Example to send signal when mouse hovers over ads on NYT frontpage---////
//////////////////////////////////////////////////////////////////////////////

/*

$(document).ready(function (){
	setTimeout(function() {
		console.log("starting...");
		console.log(document.querySelectorAll("iframe"));
		var frames = $("iframe.ad-frame.frame-for-homepage");
		console.log(frames);

		frames.on("mouseover", function(event){
			console.log("on advertisement");
			var xhr = new XMLHttpRequest();
			xhr.open("GET", "http://localhost:8080", true);
			xhr.onreadystatechange = function() {
			  if (xhr.readyState == 4) {
			  }
			}
			xhr.send();
		});
	}, 10000);
});
*/


