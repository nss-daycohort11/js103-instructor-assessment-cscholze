// GET SECTION ELEMENTS
var sectionElements = document.getElementsByClassName("article-section");

// GET OUTPUT TARGET
var outputTarget = document.getElementById("output-target");
outputTarget.innerHTML = "Test Output";
console.log(outputTarget.innerHTML);


// ASSIGN EVENT LISTENER AND HANDLER
for (var sectionElement = 0; sectionElement < sectionElements.length; sectionElement++) {
		console.log(sectionElements[sectionElement])
		console.log(sectionElements.innrHTML);
	// sectionElements[sectionElement].onclick( function (event) {
	// console.log("You clicked a section");
}

document.getElementsByType