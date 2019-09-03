/*  1st Code Challenge:
    BMI = mass / height^2
    mass in kg, height in meter
 */
var markMass, markHeight, markBmi, johnMass, johnHeight, johnBmi, higherBmi
markMass = 60
markHeight = 1.9 
johnMass = 75 
johnHeight = 1.8
markBmi = 60 / 1.9 * 1.9
johnBmi = 75 / 1.8 * 1.8
higherBmi = markBmi > johnBmi
console.log("Is Mark's BMI higher than John's? " + higherBmi)