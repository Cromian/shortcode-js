// Get element by ID
function $id(id) {
    return document.getElementById(id);
}

// Show element by ID
function show(id) {

    var e = $id(id);
    e.style.display = "block";
}

// Hide element by ID
function hide(id) {

    var e = $id(id);
    e.style.display = "none";
}

// Toggle element by ID on click (show/hide).
function toggle(id) {

    var e = $id(id);
    var visable = e.style.display == "block";
    var hidden = e.style.display == "none";

    if (hidden) {
        
        show(id);

    } else {
        
        hide(id);
    }
}