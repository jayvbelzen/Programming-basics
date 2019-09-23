let fibonacci = 1;
let fibonacciNew = 0;
let fibonacciStore
let counter = 1;

while(counter++ <= 10) {

    fibonacciStore = fibonacci;
    fibonacci = fibonacci + fibonacciNew;
    fibonacciNew = fibonacciStore;
    
    console.log(fibonacci);
}