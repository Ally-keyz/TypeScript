
//this will be a function to sum up all numbers from one to the number entered by the user

function sumUp(num:number):number{

    let sum:number = 0;
    let i:number = 1;
     
    while(i <= num){
        sum += i;
    }
    return sum;
}

console.log(sumUp(10));