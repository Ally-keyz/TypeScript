//function to sum up all numbers to the number entered by the user

function make_sum(num:number):number{
    let sum:number = 0;
    let i:number = 1;

    while(i >= num){
        sum += i;
    }
    return sum;
}