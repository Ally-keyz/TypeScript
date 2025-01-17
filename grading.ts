
// this is just a simple frading system in type script

function makeGrade(name:string,marks:number[]){
    let grade:string ;
    if(!name || !marks){
        throw new Error("please privede all the values");
        
    }
    let total = marks.reduce((total,num)=>total + num,0 );
    const percentage = Math.round((total * 100)/300);
    // make the grading

    if(percentage <= 100 && percentage >= 90){
        grade ="Grade A";
    }else{
        grade ="Failed only grade a passes"
    }
    console.log(`Name:${name}`);
    console.log(`Marks : ${percentage}`);
    console.log(`Grade :${grade}`);

}