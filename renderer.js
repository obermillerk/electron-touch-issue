// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

$('button').on('click mousedown mouseup touchstart touchend touchcancel touchmove', function(event) {
    console.log(event.type);
});