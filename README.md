# JavaScript 103 Instruction Assessment

Time to see how well we've taught you event handling in JavaScript.

## Setup

COMPLETED 1. There is sample HTML file content below so create an `index.html` for it and place the content in the body tag.
COMPLETED 2. Link in a JavaScript file named `eventHandling.js`.
COMPLETED 3. Create a CSS file and link it to your HTML. You'll be using `element.classList` to manipulate the CSS classes on elements.

## Requirements

> **Note:** Output target is the `output-target` element.

COMPLETED 1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"
COMPLETED 2. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
COMPLETED 3. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
COMPLETED 4. When you type characters into the input field, the output element should mirror the text in the input field.
COMPLETED 5. When you click the "Add color" button, the `guinea-pig` element's text color should change to blue.
COMPLETED 6. When you click the "Hulkify" button, the `guinea-pig` element's font size should become much larger.
COMPELTED 7. When you click the "Capture it" button, the `guinea-pig` element should have a border added to it.
COMPLETD 8. When you click the "Rounded" button, the `guinea-pig` element's border should become rounded.
COMPLETED 9. The first section's text should be bold.
COMPLETED 10. The last section's text should be bold and italicized.
COMPLETED 11. Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

#### Boilerplate DOM

```html
<header id="page-header">
    <h1 id="page-title">Page title</h1>
  </header>

  <ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 2</li>
    <li>Unordered list item 3</li>
  </ul>

  <article>
    <section class="article-section">Introduction</section>
    <section class="article-section">Body</section>
    <section class="article-section">Section 1</section>
    <section class="article-section">Section 2</section>
    <section class="article-section">Section 3</section>
    <section class="article-section">Conclusion</section>
  </article>

  <input type="text" id="keypress-input">
  
  <div id="output-target"></div>

  <div id="guinea-pig">Leave me alone</div>
  <button id="add-color">Add color</button>
  <button id="make-large">Hulkify</button>
  <button id="add-border">Capture it</button>
  <button id="add-rounding">Rounded</button>
```
