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

// var mark = {
//     fullName: "Mark Calderon",
//     mass: 60,
//     height: 1.9,
//     bmi: function(){
//         return this.mass / (this.height * 2)
//     }
// }

// var john = {
//     fullName: "John Rodriguez",
//     mass: 75,
//     height: 1.8,
//     bmi: function(){
//         return this.mass / (this.height * 2)
//     }
// }

// mark.bmi === john.bmi ? console.log("Mark's and John's BMI's are the same!") : (mark.bmi > john.bmi ? console.log("Mark's BMI is higher!") : console.log("John's BMI is higher!"));

/*  5th Code Challenge:
    So, remember the tip calculator that we created in another challenge. Let's now create a more advanced version using everything that we 
    learned up until this point. So this time, John and his family went to five different restaurants. And the bills were 124, 48, 268, 180, 
    and 42 dollars. And again, John likes to tip 20 percent of the bill, when it is less than 50 dollars, 50 percent if it's between 50 and 200,
    and 10 percent if the bill is more than 200 dollars. Implement a tip calculator using objects and loops this time. So here are the steps 
    for doing that, in order to help you. So, first create an object with an array for the bill values. Then, add a method to calculate the tip,
    and this method should of course include a loop, to iterate over all the paid bills, and to do the tip calculations. Then, as an output, 
    you should again create two arrays. One containing all the paid tips, and two, containing all the final paid amount. So again, the bill plus 
    the tip. Hint: you can start with two empty arrays as properties, and then fill them up in the loop, one for just number one, so all the tips,
    and then two, for all the final paid amounts. So, to even take it to the next level, Mark's family also went on a holiday. And they are going 
    to four different restaurants. The bill that they paid were 77, 375, 110, and 45 dollars. And Mark has a slightly different rules when it 
    comes to tipping. He likes to tip 20 percent, if the bill is less than 100 dollars, 10 percent, when the bill is between 100 and 300 dollars,
    and 25 percent if the bill is more than 300 dollars. So, I want you to implement the same functionality as before, but this time of course,
    using Mark's tipping rules. Then create a function, and I don't mean a method, an outside function to calculate the average of a given array 
    of tips. Hint: to calculate the average you should loop over the array, and in each iteration, store the current sum in a variable which starts 
    from zero. Then after you have the sum of the array, then you'll simply divide it by the number of elements in it. And then you'll log to the 
    console which family paid the highest tips on average.
*/

var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    paid: [],
    tipCalc: function(){
        for (var i = 0; i < this.bills.length; i++){
            var bill = this.bills[i];
            var percentage;
            if (bill > 0 && bill < 100){
                percentage = 0.2;
            }else if (bill >= 100 && bill < 300){
                percentage = 0.10;
            }else if (bill > 300){
                percentage = 0.25;
            }else{
                console.log("No tip!"); //Bill lesser or equal to 0
            }
            this.tips.push(bill * percentage);
            this.paid.push(bill + bill * percentage);
        } 
    }
}

var mike = {
    bills: [77, 375, 110, 45],
    tips: [],
    paid: [],
    tipCalc: function(){
        for (var i = 0; i < this.bills.length; i++){
            var bill = this.bills[i];
            var percentage;
            if (bill > 0 && bill < 50){
                percentage = 0.2;
            }else if (bill >= 50 && bill < 200){
                percentage = 0.15;
            }else if (bill > 200){
                percentage = 0.10;
            }else{
                console.log("No tip!"); //Bill lesser or equal to 0
            }
            this.tips.push(bill * percentage);
            this.paid.push(bill + bill * percentage);
        } 
    }
}

function highestTipper(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        var sum = sum + arr[i];
    }
    return sum / arr.length;
}

highestTipper(john.paid) > highestTipper(mike.paid) ? console.log("John is the highest tipper!") : console.log("Mike is the highest tipper!");