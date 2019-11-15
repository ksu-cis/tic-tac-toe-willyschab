// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var squares = document.getElementByClassName("square");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("dragenter", onDragEnter);
    squares[i].addEventListener("dragleave", onDragLeave);
    squares[i].addEventListener("dragstart", onDragStart);
    squares[i].addEventListener("dragend", onDragEnd);
}

function onDragEnter(event) {
    if (event.target.children.length > 0) return;
    if (event.target.classList.contains("checker")) return;
    if (event.target.classList.contains("red")) return;
    event.preventDefault();
    event.target.style.backgroundColor = "yellow";
}

function onDragStart(event) {
    dragging = {
        x: event.target.data-x,
        y: event.target.data-y
    }
    console.log(event);
}

function onDragLeave(event) {
    event.target.style.backgroundColor = null;
}

function onDragEnd(event) {
    console.log(event);
}