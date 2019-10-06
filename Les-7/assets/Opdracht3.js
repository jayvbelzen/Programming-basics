const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];  //Array of numbers

function highestNumber(number) { //Makes the highest possible number 4
    return number <= 4;
}

function filteredLapRoundsWithFilter() { //Function to make a new array

    let newArray = []; //Makes a new array
    

    
    for (let i = 0; i < lapRounds.length; i++) { //For loop to fill new array
        newArray.push(lapRounds[i]); 
    }
    
    let answer = newArray.filter(highestNumber); //Filters the array of numbers that are 4 or higher
    console.log(answer); //Outputs the array

}

filteredLapRoundsWithFilter(); //calls function

