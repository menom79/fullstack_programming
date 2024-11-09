class SpeedCalculator {
    constructor(hours, minutes, seconds, kilometers) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.kilometers = kilometers;
    }

    calcKmhPace() {
        const totalTimeInHours = this.hours + this.minutes / 60 + this.seconds / 3600;
        const speedKmh = this.kilometers / totalTimeInHours;
        return speedKmh;
    }

    get kmhPace() {
        return this.calcKmhPace().toFixed(2);
    }
}

function calculateSpeed() {
    const hours = parseFloat(document.getElementById("hours").value) || 0;
    const minutes = parseFloat(document.getElementById("minutes").value) || 0;
    const seconds = parseFloat(document.getElementById("seconds").value) || 0;
    const kilometers = parseFloat(document.getElementById("kilometers").value) || 0;

    const speedCalculator = new SpeedCalculator(hours, minutes, seconds, kilometers);
    const speed = speedCalculator.kmhPace;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Speed: ${speed} km/h`;
}
