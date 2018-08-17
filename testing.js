
function BMICalculator() {    
    this.metric_bmi = function(person) {        
        let w = person.weight;
        let h = person.height / 100;
        if (w>0 && h>0) {
            let bmi = w / Math.pow(h, 2);
            bmi = +bmi.toFixed(2);
            let message;
            if (bmi < 18.5) {
                message = "Underweight";                        
            } else if (bmi >= 18.5 && bmi < 25) {
                message = "Healthy";
            } else if (bmi >= 25 && bmi < 30) {
                message = "Overweight";
            } else {
                message = "Obese";
            }
            person.bmiValue = bmi;
            person.bmiMessage = message;
            return person;
        } else {
            person.bmiValue = "Invalid weight or height"
            person.bmiMessage = "You provided invalid inputs"
        }
    }; 
};

function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
};

Person.prototype.calculate_bmi = function () {
    calculator = new BMICalculator();
    calculator.metric_bmi(this);
}

tomas = {weight: 90, height: 186};
p = new Person(tomas);
p.calculate_bmi();

console.log(p.bmiValue);
console.log(p.bmiMessage);
