
// we are going to declare a function that is going to make recursion in typeScript

function factorial(number:number):number{
    if(number <= 1){
        return 1;
    }else{
        return number * factorial(number-1);
    }
}

console.log(factorial(5));