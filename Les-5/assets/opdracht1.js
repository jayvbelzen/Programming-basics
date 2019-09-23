let numberSequence = new Array (10, 8, 144, 3, 9);
let count = 0;

while(count < numberSequence.length) {

    if(numberSequence[count] % 4 === 0) {

        console.log("You can divide this by 4!");
        console.log(numberSequence[count] / 4);
    }
    else {
        console.log("You cant divide this by 4");
        console.log(numberSequence[count] / 4);
        console.log("Rest: " + numberSequence[count] % 4);
    }
    count++;
}