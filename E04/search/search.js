document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("nameInput");
    const suggestionsList = document.getElementById("suggestions");
    let names = [];

    fetch("search.json")
        .then(response => response.json())
        .then(data => {
            names = data;
        })
        .catch(error => console.error("Error fetching names:", error));

    nameInput.addEventListener("input", function(event) {
        const inputText = event.target.value.toLowerCase();
        const filteredNames = names.filter(name => name.toLowerCase().startsWith(inputText));
        renderSuggestions(filteredNames);
    });

    let selectedOptionIndex = -1;

    nameInput.addEventListener("keydown", function(event) {
        if (event.key === "ArrowDown" && selectedOptionIndex < suggestionsList.children.length - 1) {
            event.preventDefault();
            selectedOptionIndex++;
            updateSelectedOption();
        } else if (event.key === "ArrowUp" && selectedOptionIndex > 0) {
            event.preventDefault();
            selectedOptionIndex--;
            updateSelectedOption();
        } else if (event.key === "Enter") {
            selectSuggestion();
        }
    });

    function renderSuggestions(suggestions) {
        suggestionsList.innerHTML = "";
        selectedOptionIndex = -1;
        suggestions.forEach((name, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = name;
            listItem.addEventListener("click", function() {
                nameInput.value = name;
                suggestionsList.innerHTML = "";
            });
            suggestionsList.appendChild(listItem);
            if (index === 0) {
                listItem.classList.add("selected");
            }
        });
    }

    function updateSelectedOption() {
        const options = suggestionsList.children;
        for (let i = 0; i < options.length; i++) {
            options[i].classList.remove("selected");
        }
        if (selectedOptionIndex >= 0 && selectedOptionIndex < options.length) {
            options[selectedOptionIndex].classList.add("selected");
        }
    }

    function selectSuggestion() {
        const selectedOption = suggestionsList.querySelector(".selected");
        if (selectedOption) {
            const selectedName = selectedOption.textContent;
            nameInput.value = selectedName;
            suggestionsList.innerHTML = "";
        }
    }
});
