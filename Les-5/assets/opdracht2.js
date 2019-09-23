let fibonacci = 1;  //first number of the fibonnaci sequence
let fibonacciNew = 0; //Stores the number of the addition 
let fibonacciStore  //Keeps the last 'fibonacci' number from being removed
let counter = 1; //Counter for loop

while(counter++ <= 10) //While loop that keeps going till 'counter' gets to 10
{ 

    fibonacciStore = fibonacci;
    fibonacci = fibonacci + fibonacciNew; //Formula to calculate the next fibonacci number
    fibonacciNew = fibonacciStore;
    
    console.log(fibonacci); //Outputs the next number in the fibonacci sequence every loop
}