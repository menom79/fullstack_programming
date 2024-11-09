document.addEventListener("DOMContentLoaded", function() {
    const outputDiv = document.getElementById("output");
    const concertPhases = [
        "OMG - Lady Gaga start singing!",
        "NICE - fireworks!",
        "NICE - fireworks!",
        "NICE - fireworks!",
        "NICE - fireworks!",
        "WOW - It was the best concert in my life..."
    ];
    let currentPhaseIndex = 0;

    function displayConcertPhase() {
        if (currentPhaseIndex < concertPhases.length) {
            const phaseText = concertPhases[currentPhaseIndex];
            const phaseDiv = document.createElement("div");
            phaseDiv.textContent = phaseText;
            outputDiv.appendChild(phaseDiv);
            currentPhaseIndex++;
            setTimeout(displayConcertPhase, 5000); // Display the next phase after 5 seconds
        }
    }

    displayConcertPhase();
});
