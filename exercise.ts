//sumation in ts

function make_sum(nums:number[]):number{
  if(nums.length == 0){
    return 0;
  }
  if(!nums.every((item)=> typeof item === "number")){
    console.log("All items must be numbers");
  }
  return nums.reduce((total,num) => total + (num as number),0);
}


console.log(make_sum([1, 2, 3, 4, 5])); // 15
 