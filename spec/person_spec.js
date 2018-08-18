// spec/person_spec.js

const { Person } = require('./spec.helper')

describe("Metric Person", () => {
    let person = new Person({
        weight: 90,
        height: 186
    });

    it("should have weight of 90", () => {
        expect(person.weight).to.equal(90);
    });

    it("should have height of 186", () => {
        expect(person.height).to.equal(186);
    });
    
    it("should calculate BMI value", () => {
        person.calculate_bmi("metric");
        expect(person.bmiValue).to.equal(26.01);
    });

    it("should have a BMI Message", () => {
        person.calculate_bmi("metric");
        expect(person.bmiMessage).to.equal('Overweight');
    });
});

describe("Imperial Person", () => {
    let person = new Person({
        weight: 201,
        height: 74
    });

    it("should have weight of 201", () => {
        expect(person.weight).to.equal(201);
    });

    it("should have height of 74", () => {
        expect(person.height).to.equal(74);
    });
    
    it("should calculate BMI value", () => {
        person.calculate_bmi("imperial");
        expect(person.bmiValue).to.equal(25.80);
    });

    it("should have a BMI Message", () => {
        person.calculate_bmi("imperial");
        expect(person.bmiMessage).to.equal('Overweight');
    });
});