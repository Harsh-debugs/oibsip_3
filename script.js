const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertBtn = document.getElementById('convert-btn');
const resultParagraph = document.getElementById('result');

convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultParagraph.textContent = 'Please enter a valid temperature';
        return;
    }

    let convertedTemperature;
    let convertedUnit;

    if (unit === 'celsius') {
        convertedTemperature = temperature * 9/5 + 32;
        convertedUnit = '°Fahrenheit';
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = '°Celsius';
    }

    resultParagraph.textContent = `${temperature} ${unit === 'celsius' ? '°C' : '°F'} is equal to ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
});