function convertTemp() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var resultElement = document.getElementById("result");
    var result;

    if (fromUnit === "celcius") {
        result = {
            fahrenheit: inputTemp * 9/5 + 32,
            kelvin: inputTemp + 273.15
        };
    } else if (fromUnit === "fahrenheit") {
        result = {
            celcius: (inputTemp - 32) * 5/9,
            kelvin: (inputTemp - 32) * 5/9 + 273.15
        };
    } else if (fromUnit === "kelvin") {
        result = {
            celcius: inputTemp - 273.15,
            fahrenheit: (inputTemp - 273.15) * 9/5 + 32
        };
    }

    resultElement.innerHTML = `Hasil Konversi:<br>
                                Celcius: ${result.celcius ? result.celcius.toFixed(2) : ""}<br>
                                Fahrenheit: ${result.fahrenheit ? result.fahrenheit.toFixed(2) : ""}<br>
                                Kelvin: ${result.kelvin ? result.kelvin.toFixed(2) : ""}`;
}
