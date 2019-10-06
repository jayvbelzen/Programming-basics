const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 
let min = 0;    //marks minimum worth of the random number (start of array)
let max = 7;    //marks maximum worth of the random number (end of array)
let random = Math.floor(Math.random() * (+max - +min)) + +min; //gives a random number between the min and max worth

function randomNumber() {
    console.log(lapRounds[random]); //outputs the random number in the shape of an array output
}

randomNumber(); //calls function randomNumber