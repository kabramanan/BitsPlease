function sleep(milliseconds) {
  	var start = new Date().getTime();
  	for (var i = 0; i < 1e8; i++) {
   	 if ((new Date().getTime() - start) > milliseconds){
    	  break;
    		}
  		}
	}

function dostuff(r){
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api.openweathermap.org/data/2.5/find?q=" + r + "&units=metric&type=accurate&mode=xml&APPID=21d09755ec6123ab635d8b8e09d9bea3", false);
	xhr.send();
	var p = xhr.responseXML;
	var temp = p.getElementsByTagName("temperature")[0].attributes; 
	txt = temp.getNamedItem("value").nodeValue;

	var l = document.getElementById("p1");
	l.textContent = txt;

	temp = p.getElementsByTagName("humidity")[0].attributes; 
	txt = temp.getNamedItem("value").nodeValue;

	var m = document.getElementById("p2");
	m.textContent = txt; 

	temp = p.getElementsByTagName("weather")[0].attributes; 
	txt = temp.getNamedItem("value").nodeValue;

	var n = document.getElementById("p3");
	n.textContent = txt;

	temp = p.getElementsByTagName("speed")[0].attributes; 
	txt = temp.getNamedItem("name").nodeValue;

	var o = document.getElementById("p4");
	o.textContent = txt;

	console.log(txt);
	console.log(xhr.response);
	console.log(xhr.statusText);
}

sleep(4500);

$('#sub').click(function() {
	console.log("hi");
	var r = $('#city').val();
	dostuff(r);
	//$('#city').val('');
});
