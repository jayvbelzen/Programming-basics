const allMyRecords = [  //2D array of all records            
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"], //first array
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"] //second array
 ];

 function displayAllMyRecords() { //function to display all records

    for(let i = 0; i < allMyRecords.length; i++) { //loops through the 2d array
        for(let j = 0; j < allMyRecords[i].length; j ++) { //loops through every single element of the arrays inside the grid
            console.log(allMyRecords[i][j]); //displays all elements in console
        }
    }

 }

 displayAllMyRecords(); //calls function