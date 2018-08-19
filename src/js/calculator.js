// calculator.js

function BMICalculator() {    
    this.metric_bmi = function(person) {        
        let w = person.weight;
        let h = person.height / 100;
        if (w>0 && h>0) {
            let bmi = w / Math.pow(h, 2);
            bmi = +bmi.toFixed(2);
            person.bmiValue = bmi;
            person.bmiMessage = getMessage(bmi);            
        } else {
            person.bmiValue = false
            person.bmiMessage = "You provided invalid inputs"
        }
    };

    this.imperial_bmi = function(person) {        
        let w = person.weight * 703;
        let h = person.height
        if (w>0 && h>0) {
            let bmi = w / Math.pow(h, 2);
            bmi = +bmi.toFixed(2);
            person.bmiValue = bmi;
            person.bmiMessage = getMessage(bmi);            
        } else {
            person.bmiValue = false
            person.bmiMessage = "You provided invalid inputs"
        }
    };

    function getMessage(bmi) {
        if (bmi < 18.5) {
            return message = "Underweight";                        
        } else if (bmi >= 18.5 && bmi < 25) {
            return message = "Healthy";
        } else if (bmi >= 25 && bmi < 30) {
            return message = "Overweight";
        } else {
            return message = "Obese";
        }
    };
};
