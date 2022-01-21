/* Toggle menu function */
function togglemenu() {
    var x = document.getElementById("menu_content"),
        navigation = document.getElementById("navigation"),
        ul = document.getElementById("navigation_items"),
        header_content = document.getElementById("header_content"),
        toggle_icon = document.getElementById("toggle_icon");

    if (ul.style.display === "block") {
        ul.setAttribute("style", "display: none !important");
    } else {

        ul.setAttribute("style", "display: block !important");
    }



    /* Scroll to top function */
    scrollTotop = document.getElementById("scrollToTop");

    function scrollTop() {
        window.scrollTo
    }