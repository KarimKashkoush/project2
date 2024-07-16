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

function openNav() {
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

// Start Landing
const texts = ["هويتك المرضية ديما معاك", "خليك مكانك واحجز ميعاد كشفك"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function text() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(() => {
            document.getElementById('typing-text').textContent = '';
        }, 2000);
    }
    setTimeout(text, 200);
}());
// End Landing