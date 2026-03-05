function generateColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;

    const colorBox = document.getElementById("colorBox");
    colorBox.style.backgroundColor = randomColor;
    colorBox.textContent = randomColor.toUpperCase();

    const hex = randomColor.slice(1);
    const red = parseInt(hex.slice(0, 2), 16);
    const green = parseInt(hex.slice(2, 4), 16);
    const blue = parseInt(hex.slice(4, 6), 16);
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

    colorBox.style.color = brightness > 150 ? "#000000" : "#FFFFFF";
}

window.addEventListener("DOMContentLoaded", generateColor);
