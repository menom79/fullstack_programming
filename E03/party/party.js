document.addEventListener("DOMContentLoaded", function() {
    const partyText = document.getElementById("partyText");
    const colorSelect = document.getElementById("colorSelect");
    const resultArea = document.getElementById("resultArea");
    const changeColorButton = document.getElementById("changeColorButton");

    partyText.addEventListener("input", function() {
        const inputText = partyText.value;
        if (/^[a-zA-Z]+$/.test(inputText)) {
            resultArea.textContent = inputText;
        } else {
            partyText.value = inputText.slice(0, -1);
        }
    });

    changeColorButton.addEventListener("click", function() {
        const selectedColor = colorSelect.value;
        resultArea.style.color = selectedColor;
    });
});
