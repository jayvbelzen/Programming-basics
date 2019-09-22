let gewicht = 75;
let lengteMeter = 1.83;
let BMI = gewicht / (lengteMeter * lengteMeter);
BMI = BMI.toFixed(1);
const checkMBI = true;

switch(checkBMI) {

    case (BMI < 18.5) :
        console.log('ondergewicht');
        break;
    case (BMI >= 18.5 && BMI < 25) :
        console.log('normaal gewicht');
        break;
    case (BMI >= 25 && BMI < 30) :
        console.log('overgewicht');
        break;
    case (BMI >= 30):
        console.log('obesitas')
        break; 
}


