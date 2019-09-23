let numberSequence = new Array (10, 8, 144, 3, 9); //Array of numbers
let count = 0;

while(count < numberSequence.length) //While loop that keeps going till all numbers of the array have been used
{ 

    if(numberSequence[count] % 4 === 0) { //Modulo checks if you can divide something by 4 and have 0 rest

        console.log("You can divide this by 4!"); //outputs true
        console.log(numberSequence[count] / 4);
    }
    else {
        console.log("You cant divide this by 4"); //outputs false
        console.log(numberSequence[count] / 4);
        console.log("Rest: " + numberSequence[count] % 4);
    }
    count++; //increments the counter by 1
}