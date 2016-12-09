console.log("Sanity check");

function hello() {
	console.log("OGENKI DESU KA????");
	//alert("OGENKI DESU KA????");
	var changeDiv = document.getElementById("divElement");
	changeDiv.innerHTML = "YAMEROUU";
	console.log(changeDiv);
	//document.innerHTML = "Hi";
}


function sofast() {
	console.log("hello")
	var classElements = document.getElementsByClassName("1st")
	console.log(classElements);
	classElements[0].innerHTML = "HALP";
	// body...
}