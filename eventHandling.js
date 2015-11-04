// GET OUTPUT TARGET
var outputTargetElement = document.getElementById("output-target");

// GET GUINEA PIG ELEMENT
var guineaPigElement = document.getElementById("guinea-pig");


// 1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"
var sectionElements = document.getElementsByClassName("article-section");
for (var i = 0; i < sectionElements.length; i++) {
	sectionElements[i].addEventListener("click", function(event) {
		outputTargetElement.innerHTML = "You clicked on the "+ event.target.innerHTML+" section";
	});
}

// 2. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
var h1Element = document.getElementById("page-title");
h1Element.addEventListener("mouseover", function(event) {
	outputTargetElement.innerHTML = "You moved your mouse over the header.";
});

// 3. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
h1Element.addEventListener("mouseleave", function(event) {
	outputTargetElement.innerHTML = "You left me!!";
});

// 4. When you type characters into the input field, the output element should mirror the text in the input field.
var userInput = document.getElementById("keypress-input");
userInput.addEventListener("keyup", function(event) {
	outputTargetElement.innerHTML = userInput.value;
});

// 5. When you click the "Add color" button, the `guinea-pig` element's text color should change to blue.
var addColor = document.getElementById("add-color");
addColor.addEventListener("click", function(event) {
	guineaPigElement.classList.toggle("add-color");
});

// 6. When you click the "Hulkify" button, the `guinea-pig` element's font size should become much larger.
var makeLarge = document.getElementById("make-large");
makeLarge.addEventListener("click", function(event) {
	guineaPigElement.classList.toggle("make-large");
});

// 7. When you click the "Capture it" button, the `guinea-pig` element should have a border added to it.
var addBorder = document.getElementById("add-border");
addBorder.addEventListener("click", function(event) {
	guineaPigElement.classList.toggle("add-border");
});

// 8. When you click the "Rounded" button, the `guinea-pig` element's border should become rounded.
var addRounding = document.getElementById("add-rounding");
addRounding.addEventListener("click", function(event) {
	guineaPigElement.classList.toggle("add-rounding");
});