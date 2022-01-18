/* Toggle menu function */
function togglemenu() {
    var x = document.getElementById("menu-content");
    var ul = document.getElementById("navigation-items");
    var header_content = document.getElementById("header-content");
    var toggle_icon = document.getElementById("toggle_icon");

    if (x.className === "site-main-menu") {
        x.className += "responsive";
        x.style.setProperty("padding-top", "30px");
        ul.style.setProperty("display", "flex");
        ul.style.setProperty("flex-direction", "column");
        header_content.style.setProperty("background-color", "rgb(22, 24, 156)");
        ul.style.setProperty("text-align", "right");
        toggle_icon.style.setProperty("color", "#fff");

    } else {
        x.className = "site-main-menu";

    }
}