// Main Varibales
let body = document.body;

// Start Header
body.onscroll = () => {
    let header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
}

function cliccc() {
    let headerContainer = document.getElementById("headerContainer");
    let icon = document.getElementById("btnHeader")
    if (headerContainer.classList.contains("open-nav")) {
        headerContainer.classList.remove("open-nav")
        icon.classList.add("fa-angles-up")
        icon.classList.remove("fa-angles-down")
    } else {
        headerContainer.classList.add("open-nav")
        icon.classList.remove("fa-angles-up")
        icon.classList.add("fa-angles-down")
    }
}
// End Header