let purchasedBook = false;
let job = 'teacher';
let inTrain = true;

if (purchasedBook && job == 'teacher' && inTrain) {

    console.log('Finally I can enjoy my book!');  
}

else if (!purchasedBook && job == 'teacher' && inTrain) {

    console.log('I should buy a book.');
}

else if (!purchasedBook && job == 'teacher' && !inTrain) {

    console.log('What am I going to do on my way home?');
}

else if (purchasedBook && job == 'teacher' && !inTrain) {
    
    console.log('I cant wait to read my new book!');
}

else if (job != 'teacher') {

    console.log('Why am I thinking about reading a book on my way home from school? Im not even a teacher.');
}