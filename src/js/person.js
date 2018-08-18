// src/js/person.js

function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
};

Person.prototype.calculate_bmi = function (calcType) {
    calculator = new BMICalculator();
    if (calcType === "metric") {
        calculator.metric_bmi(this);
    } else {
        calculator.imperial_bmi(this);
    }
}
