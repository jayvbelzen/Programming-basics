let currentAction = 'strings';


switch(currentAction) {


    case 'calculating' :
        let y = 5;
        let x = 10;
        console.log('optellen: ', y + x);
        console.log('aftrekken: ', y - x);
        console.log('delen: ', y / x);
        console.log('vermenigvuldigen: ', y * x);



        break;


    case 'strings' :
        let message = 'Als achter vliegen vliegen vliegen vliegen vliegen vliegen achterna.'
        console.log(message.toUpperCase());
        console.log(message.match(/vlieg/g));
        console.log(message.substring(20,43));
        console.log(message.length);
        console.log(message.charAt(11));
        break;

    case 'boolean' :
        let z = 20;
        
        if(z > 10){
            console.log('z is groot genoeg.');
        }
        else {
            console.log('z is niet groot genoeg.');
        }
        break;

    default :
        console.log('currentAction kan niet worden uitgevoerd.');

}