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
var johnsTeamScoreAvg, mikesTeamScoreAvg, marysTeamScoreAvg
johnsTeamScoreAvg = (89 + 120 + 103) / 3
mikesTeamScoreAvg = (116 + 94 + 123) / 3
marysTeamScoreAvg = (97 + 134 + 105) / 3

// switch (winnerAvg) {
//     case johnsTeamScoreAvg > mikesTeamScoreAvg && johnsTeamScoreAvg > marysTeamScoreAvg:
//         console.log("John's team is the winner, with an average of " + johnsTeamScoreAvg);
//         break;
//     case mikesTeamScoreAvg > johnsTeamScoreAvg && mikesTeamScoreAvg > marysTeamScoreAvg:
//         console.log("Mike's team is the winner, with an average of " + mikesTeamScoreAvg);
//         break;
//     case marysTeamScoreAvg > johnsTeamScoreAvg && marysTeamScoreAvg > mikesTeamScoreAvg:
//         console.log("Mary's team is the winner, with an average of " + marysTeamScoreAvg);
//         break;
//     default:
//         console.log("It's a draw!!");
// }   
if (johnsTeamScoreAvg > mikesTeamScoreAvg && johnsTeamScoreAvg > marysTeamScoreAvg){
    console.log("John's team is the winner, with an average of " + johnsTeamScoreAvg);
} else if (mikesTeamScoreAvg > johnsTeamScoreAvg && mikesTeamScoreAvg > marysTeamScoreAvg){
    console.log("Mike's team is the winner, with an average of " + mikesTeamScoreAvg);
} else if (marysTeamScoreAvg > johnsTeamScoreAvg && marysTeamScoreAvg > mikesTeamScoreAvg){
    console.log("Mary's team is the winner, with an average of " + marysTeamScoreAvg);
} else {
    console.log("It's a draw!!");
}

