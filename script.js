
function getColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeButtonColor(buttonId) {
    const randomColor = getColor();
    
    const button = document.getElementById(buttonId);
    
    button.style.backgroundColor = randomColor;

    button.textContent = "Color: " + randomColor;
}

function changeBodyBackground() {
    const randomColor = getColor();
    document.body.style.backgroundColor = randomColor;

    const bodyColorDisplay = document.getElementById("body-color-display");
    bodyColorDisplay.textContent = "Body Background Color: " + randomColor;
}

function changeBackground(cardId, displayId) {
    const randomColor = getColor();
    const card = document.getElementById(cardId);
    card.style.backgroundColor = randomColor;

    const colorDisplay = document.getElementById(displayId);
    colorDisplay.textContent = "Card Color: " + randomColor;
}
