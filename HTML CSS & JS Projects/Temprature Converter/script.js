function convertTemperature() {
    const temperature = document.getElementById('temperature').value;
    const conversion = document.getElementById('conversion').value;
    let resultText = '';

    if (temperature === '') {
        document.getElementById('result').innerText = 'Please enter a temperature value.';
        return;
    }

    const tempValue = parseFloat(temperature);

    if (conversion === 'toCelsius') {
        const celsius = (tempValue - 32) * 5 / 9;
        resultText = `${tempValue}°F is ${celsius.toFixed(2)}°C`;
    } else if (conversion === 'toFahrenheit') {
        const fahrenheit = (tempValue * 9 / 5) + 32;
        resultText = `${tempValue}°C is ${fahrenheit.toFixed(2)}°F`;
    }

    document.getElementById('result').innerText = resultText;
}
