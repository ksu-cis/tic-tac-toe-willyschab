// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var cells = document.getElementByClassName("cell");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener(event => {
        event.preventDefault()
    });
}