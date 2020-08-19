var count=0;
//************Functions for both demographic and epoll************
function GrabLocation() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function DisplayLocation(){
	var loc = GrabLocation()["CCCLocation"];
}

function HideLocation(){
	document.getElementById('entry_47997536').style.display = 'none';
}

function StoreLocation(){
	
	var ccc_loc = GrabLocation()["CCCLocation"];
	localStorage.setItem("CCCLoc", ccc_loc);
		
	storeLangLoc("eng");
	SetDemoLocationENG();
}

function storeLangLoc(lang) {
	if (localStorage) {
		localStorage.setItem("Language", lang);
	}
}

//************Functions for demographic************
function SetDemoLocationENG(){
		
	HideLocation();
	
	var loc_lang = localStorage.getItem("CCCLoc") + ',English';
	//alert(loc_lang);
	document.getElementById('entry_47997536').value = loc_lang;
}

function SetDemoLocationCH(){
	HideLocation();
	
	var loc_lang = localStorage.getItem("CCCLoc") + ',Chinese';
	//alert(loc_lang);
	document.getElementById('entry_47997536').value = loc_lang;
}

function SetDemoLocationML(){
	HideLocation();
	
	var loc_lang = localStorage.getItem("CCCLoc") + ',Malay';
	//alert(loc_lang);
	document.getElementById('entry_47997536').value = loc_lang;
}

function SetDemoLocationTM(){
	HideLocation();
	
	var loc_lang = localStorage.getItem("CCCLoc") + ',Tamil';
	//alert(loc_lang);
	document.getElementById('entry_47997536').value = loc_lang;
}

//************Functions for epoll************
// something wrong with feedback, hard to merge, just change url to use virtual path
function loadLang(){
	var language = localStorage.getItem("Language");
	if (language == "eng") {
		window.location.href = "http://citizenconnectcentre.sg/poll1/feedback-en.html";
	} else if (language == "ch") {
		window.location.href = "http://citizenconnectcentre.sg/poll1/feedback-ch.html";
	} else if (language == "ml") {
		window.location.href = "http://citizenconnectcentre.sg/poll1/feedback-ml.html";
	} else if (language == "tm") {
		window.location.href = "http://citizenconnectcentre.sg/poll1/feedback-tm.html";
	}	
}


function SetEpollLocationENG(){
	HideLocation();
	
	var loc_lang = localStorage.getItem("CCCLoc") + ',English';
	//alert(loc_lang);
	document.getElementById('entry_47997536').value = loc_lang;
}

function SetEpollLocationCH(){
	HideLocation();
	
	var loc_lang = localStorage.getItem("CCCLoc") + ',Chinese';
	//alert(loc_lang);
	document.getElementById('entry_47997536').value = loc_lang;
}

function SetEpollLocationML(){
	HideLocation();
	
	var loc_lang = localStorage.getItem("CCCLoc") + ',Malay';
	//alert(loc_lang);
	document.getElementById('entry_47997536').value = loc_lang;
}

function SetEpollLocationTM(){
	HideLocation();
	
	var loc_lang = localStorage.getItem("CCCLoc") + ',Tamil';
	//alert(loc_lang);
	document.getElementById('entry_47997536').value = loc_lang;
}