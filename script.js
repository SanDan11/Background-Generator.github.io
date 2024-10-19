
function getColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function isValidColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
}


function changeBodyBackground() {
    const inputColor = document.getElementById("bodyColorInput").value;
    const randomColor = getColor();
    const colorToUse = isValidColor(inputColor) ? inputColor : randomColor;

    
    document.body.style.backgroundColor = colorToUse;

    const card1 = document.getElementById("card1");
    card1.style.backgroundColor = colorToUse;

    document.getElementById("color-display-1").textContent = "Card 1 Color: " + colorToUse;
}

function changeBackground(cardId, displayId, inputId) {
    const inputColor = document.getElementById(inputId).value;
    const randomColor = getColor();
    const colorToUse = isValidColor(inputColor) ? inputColor : randomColor;

    const card = document.getElementById(cardId);
    card.style.backgroundColor = colorToUse;

    const colorDisplay = document.getElementById(displayId);
    colorDisplay.textContent = "Card Color: " + colorToUse;
}


function changeButtonColor(buttonId) {
    const randomColor = getColor();
    const button = document.getElementById(buttonId);
    button.style.backgroundColor = randomColor;
    button.textContent = "Color: " + randomColor;
}
