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

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









