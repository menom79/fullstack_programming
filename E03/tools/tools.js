function calculateGrade() {
    const test1 = parseInt(document.getElementById("test1").value);
    const test2 = parseInt(document.getElementById("test2").value);
    const test3 = parseInt(document.getElementById("test3").value);
    const test4 = parseInt(document.getElementById("test4").value);

    const totalPoints = test1 + test2 + test3 + test4;

    let grade = 0;
    if (totalPoints >= 0 && totalPoints <= 12) {
        grade = 0;
    } else if (totalPoints >= 13 && totalPoints <= 15) {
        grade = 1;
    } else if (totalPoints >= 16 && totalPoints <= 17) {
        grade = 2;
    } else if (totalPoints >= 18 && totalPoints <= 19) {
        grade = 3;
    } else if (totalPoints >= 20 && totalPoints <= 21) {
        grade = 4;
    } else if (totalPoints >= 22 && totalPoints <= 24) {
        grade = 5;
    }

    document.getElementById("totalPoints").textContent = totalPoints;
    document.getElementById("grade").textContent = grade;
}
