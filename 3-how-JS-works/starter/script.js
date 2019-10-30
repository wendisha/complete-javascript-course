///////////////////////////////////////
// Lecture: Hoisting

//Function declaration (we could call it before or after, and it will still work)
function calculateAge(year){
    console.log(2019 - year);
}

calculateAge(1984);

//Function expression (we can only call it after defining it)
var retirement = function(year){
    console.log(65 - (2019 - year));
}

retirement(1990);


//Variables
console.log(age);       //this one throws undefined
var age = 18;
console.log(age);       //this one console.logs 18

function foo(){
    console.log(age);   //undefined
    var age = 65;   
    console.log(age);   //65
}

foo();
console.log(age);       //18





///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);    //Hello!Hi!Hey! is console logged, LEXICAL SCOPING!
    }
}




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d); //This would throw and Uncaught ReferenceError because it cannot access variable b (or c)
// }



///////////////////////////////////////
// Lecture: The this keyword

console.log(this); //this will console log the window object

calculateAge(1984);

//FUNCTION DECLARATION EXAMPLE
function calculateAge(year){
    console.log(2019 - year);
    console.log(this);          //this points to the window object because this is a regular function call
}

//FUNCTION EXPRESSION EXAMPLE
var john = {
    name: "John",
    birthYear: 1990,
    age: function() {
        console.log(this);                      //this points to the john object
        console.log(2019 - (this.birthYear));   //this will console log john's age
        // function innerFunction(){
        //     console.log(this);                  //this points to the window object because this is a regular function call
        // }
        // innerFunction();
    } 
}

john.age();

var mike = {
    name: "Mike",
    birthYear: 1985
}

mike.age = john.age;     //this points to the mike object
mike.age();             //this will console log mike's age



