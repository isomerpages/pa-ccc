
var fontSize = 0;
function enlargeFont() {
	// Change root font size
	fontSize++;
	if(fontSize > 2)
		fontSize = 2;
		
	if(fontSize == 1){
		document.getElementById("root").style.fontSize = "19px";
	}
	else {
		document.getElementById("root").style.fontSize = "22px";
		$(".smiley").addClass("smiley-space")
	}	
}

function minimizeFont() {
	// Change root font size
	fontSize--;
	if(fontSize < 0)
		fontSize = 0;
	if(fontSize == 1){
		document.getElementById("root").style.fontSize = "19px";
		
	}
	else {
		document.getElementById("root").style.fontSize = "16px";	
		$(".smiley").removeClass("smiley-space")
	}
}
 