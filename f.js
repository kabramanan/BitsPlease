var meantemp = 0;
var meanhumidity = 0;
var blah;

function dostuff(r){
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api.openweathermap.org/data/2.5/find?q=" + r + "&units=metric&type=accurate&mode=xml&APPID=21d09755ec6123ab635d8b8e09d9bea3", false);
	xhr.send();
	var p = xhr.responseXML;
	var temp = p.getElementsByTagName("temperature")[0].attributes; 
	txt = temp.getNamedItem("value").nodeValue;
	console.log(txt);
	meantemp += (parseInt)(txt);

	temp = p.getElementsByTagName("humidity")[0].attributes; 
	txt = temp.getNamedItem("value").nodeValue;
	console.log(txt);
	//sum = (parseInt)txt;
	meanhumidity += (parseInt)(txt);

	if(blah.length == 1)
	{	
		temp = p.getElementsByTagName("weather")[0].attributes; 
		txt = temp.getNamedItem("value").nodeValue;

		var n = document.getElementById("p3");
		n.textContent = txt;

		temp = p.getElementsByTagName("speed")[0].attributes; 
		txt = temp.getNamedItem("name").nodeValue;

		var o = document.getElementById("p4");
		o.textContent = txt;
	}
	else
	{
		var n = document.getElementById("p3");
		n.textContent = " ";

		var o = document.getElementById("p4");
		o.textContent = " ";
	}
	//console.log(txt);
	//console.log(xhr.response);
	//console.log(xhr.statusText);
}

$('#sub').click(function() {
	meantemp = 0;
	meanhumidity = 0;
	console.log("hi");
	var r = $('#city').val();
	//console.log(r);
	blah = r.split(',');
	for(var loi = 0 ; loi < blah.length ; loi++)
		dostuff(blah[loi]);
	console.log(meantemp / blah.length);
	console.log(meanhumidity / blah.length);

	var l = document.getElementById("p1");
	l.textContent = meantemp / blah.length;

	var m = document.getElementById("p2");
	m.textContent = meanhumidity / blah.length; 
	//$('#city').val('');
});
