/*  1st Code Challenge:
    BMI = mass / height^2
    mass in kg, height in meter
 */
// var markMass, markHeight, markBmi, johnMass, johnHeight, johnBmi, higherBmi
// markMass = 60
// markHeight = 1.9 
// johnMass = 75 
// johnHeight = 1.8
// markBmi = 60 / 1.9 * 1.9
// johnBmi = 75 / 1.8 * 1.8
// higherBmi = markBmi > johnBmi
// console.log("Is Mark's BMI higher than John's? " + higherBmi)

/*  2nd Code Challenge:
    John and Mike both play basketball but on different teams. And in the latest three games, John's team has scored 89, 120 and 103 points.
    And Mike's team has scored 116, 94 and 123 points. Calculate the average score for each team, then decide which team wins on average, 
    and then print the winner to the console, including the average score. Don't forget to take into account, that there might be a draw.
    Mary also plays basketball and her team has scored 97, 134 and 105 points. And like before, I want you to log the average
    winner to the console. So what you're gonna have to do here, is check if one of the players has a larger score than the other two.
 */
// var johnsTeamScoreAvg, mikesTeamScoreAvg, marysTeamScoreAvg
// johnsTeamScoreAvg = (89 + 120 + 103) / 3
// mikesTeamScoreAvg = (116 + 94 + 123) / 3
// marysTeamScoreAvg = (97 + 134 + 105) / 3
  
// if (johnsTeamScoreAvg > mikesTeamScoreAvg && johnsTeamScoreAvg > marysTeamScoreAvg){
//     console.log("John's team is the winner, with an average of " + johnsTeamScoreAvg);
// } else if (mikesTeamScoreAvg > johnsTeamScoreAvg && mikesTeamScoreAvg > marysTeamScoreAvg){
//     console.log("Mike's team is the winner, with an average of " + mikesTeamScoreAvg);
// } else if (marysTeamScoreAvg > johnsTeamScoreAvg && marysTeamScoreAvg > mikesTeamScoreAvg){
//     console.log("Mary's team is the winner, with an average of " + marysTeamScoreAvg);
// } else {
//     console.log("It's a draw!!");
// }

/*  3rd Code Challenge:
    John and his family went on a holiday and went to three different restaurants, and the bills were 124, 48, and 268 dollars.
    Now to tip the waiter a fair amount, John created a simple tip calculator as a function. And the way that John calculates his tips,
    is that he likes to tip 20 percent of the bill when then bill is less than 50 dollars, 15 percent when the bill is between 50 and 200 dollars,
    and 10 percent of the bill if it is more than 200 dollars. In the end, John would like to have two arrays as the end results.
    One containing all three tips, so one for each bill, and then one containing all three final paid amounts, meaning the bill plus the paid tip.
*/
// function tipCalculator(){
//     var tips = [18.6, 9.6, 26.8]
//     var paid = [142.6, 57.6, 294.8]
//     console.log(tips)
//     console.log(paid)
// }

/*  4th Code Challenge:
    Let's remember the first coding challenge, where Mark and John compared their Body Mass Indexes. Let's now implement the same functionality,
    but this time with objects and methods. So for each of them, create an object with properties for their full name, mass, and height,
    then, add a method to each object to calculate the BMI. And what I want you to do here is to both save the BMI to the object, and also 
    return it from the method. And then in the end, I want you to log to the console who has the highest BMI, together with the full name
    and the respective BMI value. Don't forget that they actually might have the same BMI. Keep in mind the mass has to be in kilogram
    and the height in meter.
*/

var mark = {
    fullName: "Mark Calderon",
    mass: 60,
    height: 1.9,
    bmi: function(){
        return this.mass / (this.height * 2)
    }
}

var john = {
    fullName: "John Rodriguez",
    mass: 75,
    height: 1.8,
    bmi: function(){
        return this.mass / (this.height * 2)
    }
}

mark.bmi === john.bmi ? console.log("Mark's and John's BMI's are the same!") : (mark.bmi > john.bmi ? console.log("Mark's BMI is higher!") : console.log("John's BMI is higher!"));