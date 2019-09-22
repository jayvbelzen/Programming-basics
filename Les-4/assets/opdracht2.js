let grade = 3;
const checkGrade = true;

switch(checkGrade)
{
    case (grade < 6): 
        console.log('onvoldoende');
        break;
    case (grade >= 6 && grade < 7) :
        console.log('voldoende');
        break;
    case (grade >= 7 && grade < 9): 
        console.log('goed');
        break;
    case (grade >= 9):
        console.log('uitmuntend');
        break;


}