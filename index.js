function hitungBMI(event) {
    event.preventDefault();

    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    // Status BMI
    let status = '';
    if (bmi < 18.5) {
        status = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal Weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight';
    } else {
        status = 'Obesity';
    }

    document.getElementById('bmi-result').textContent = bmi;
    document.getElementById('bmi-status').textContent = status;
}

document.getElementById('bmi-form').addEventListener('submit', hitungBMI);