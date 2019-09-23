let numberSequence = new Array (2, 4, 8, 9, 12, 13); //Array of numbers
let storeNumber = 0; //Stores the addition of the loop for the next loop

for(i = 0; i < numberSequence.length; i++)  //For loop that keeps going for the amount of numbers in the array (length of the array)
{
    storeNumber = storeNumber + numberSequence[i]; //Addition of the last stored number and array[place of current loop]
    console.log(storeNumber); //outputs the answer of the addition every loop
}
