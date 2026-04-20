
        // turns the Element Id('temp_input) into tempInput: See A0 for more detell.
        let tempInput = document.getElementById('temp_input');
        let endTempDisplay = document.getElementById('temp_output').innerHTML;


function tempConvert() {

        // gets the input values
        
        let errorDisplay = document.getElementById('error-message');

        let F0=document.getElementById('fahren_0').checked;
        let C0=document.getElementById('celsius_0').checked;
        let K0=document.getElementById('kelvin_0').checked;

        let F1=document.getElementById('fahren_1').checked;
        let C1=document.getElementById('celsius_1').checked;
        let K1=document.getElementById('kelvin_1').checked;

        // A0: gets the value form tempInput and turns it into 
        let temperature = parseFloat(tempInput.value);


        // To make sure that only numbers are inputed
        if (isNaN(temperature)) {
                errorDisplay.textContent = 'Please enter a valid number.';
        }

        if (F0 == false && C0 == false && K0 == false) {
                alert("Please choose a starting temperature unit.");
        }

        if (F1 == false && C1 == false && K1 == false) {
                alert("Please choose a conversion temperature unit.");
        }

        //  endTempDisplay.textContent = tempInput.value;
        



// console.log(document.getElementById('fahren_0').checked);
// console.log(document.getElementById('celsius_0').checked);
// console.log(document.getElementById('kelvin_0').checked);

// console.log(document.getElementById('quantity').checked);

// console.log(document.getElementById('fahren_1').checked);
// console.log(document.getElementById('celsius_1').checked);
// console.log(document.getElementById('kelvin_1').checked);




if (F0){
        if(F1){
                alert("Starting and conversion units cannot be the same.");
            }
        
        else if(C1){
                fahrenToCelsius(temperature);
        }
    
        else if(K1){
                fahrenToKelvin(temperature);
        }
}


if(C0){
        if(F1){
                celsiusToFahren(temperature);
        }
    
        else if(C1){
                alert("Starting and conversion units cannot be the same");
        }
    
        else if(K1){
                celsiusToKelvin(temperature);
        }
}


if(K0){
        if(F1){
                kelvinToFahren(temperature);
        }
    
        else if(C1){
                kelvinToCelsius(temperature);
        }
    
        else if(K1){
                alert("Starting and conversion units cannot be the same");
        }
}








}

// The Temperature calculato converters


function fahrenToCelsius(fahrenheit){
        console.log("test_FTC");
        endTempDisplay = ((fahrenheit - 32) * 5/9).toFixed(2);
        document.getElementById('temp_output').innerHTML = endTempDisplay + " " + "&deg;C";
        // temp_calculator 1.B
}

function fahrenToKelvin(fahrenheit){
        console.log("test_FTK");
        endTempDisplay = (((fahrenheit - 32) * 5/9) + 273.15).toFixed(2);
        document.getElementById('temp_output').innerHTML = endTempDisplay + " " + "K";
        // temp_calculator 1.C
}

function celsiusToFahren(celsius){
        console.log("test_CTF");
        endTempDisplay = ((celsius * 9/5) + 32).toFixed(2);
        document.getElementById('temp_output').innerHTML = endTempDisplay + " " + "&deg;F";
        // temp_calculator 2.A
}
function celsiusToKelvin(celsius){
        console.log("test_CTK");
        endTempDisplay = (celsius + 273.15).toFixed(2);
        document.getElementById('temp_output').innerHTML = endTempDisplay + " " + "K";
        // temp_calculator 2.C
}

function kelvinToFahren(kelvin){
        console.log("test_KTF");
        endTempDisplay = (((kelvin - 273.15) * 9/5) + 32).toFixed(2);
        document.getElementById('temp_output').innerHTML = endTempDisplay + " " + "&deg;F";
        // temp_calculator 3.A
}

function kelvinToCelsius(kelvin){
        console.log("test_KTC");
        endTempDisplay = (kelvin - 273.15).toFixed(2);
        document.getElementById('temp_output').innerHTML = endTempDisplay + " " + "&deg;C";
        // temp_calculator 3.B
}




