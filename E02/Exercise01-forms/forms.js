function calculateSum(num1, num2) {
    return num1 + num2;
}

function displaySum() {
    // Getting input values
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    // Checking if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calculate the sum
        const sum = calculateSum(num1, num2);

        // Displaying the result
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = `Sum is ${sum}`;
    } else {
        // Displaying error message if inputs are not valid numbers
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = "Please enter valid numbers.";
    }
}
