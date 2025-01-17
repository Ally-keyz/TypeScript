//TypeScript function trackPerformance that takes an array of students


interface Studenta  {
    name: string;
    marks: number[];
};


function trackPerformance(students:Studenta){
    //validation
    if(!students.name || !students.marks){
        throw new Error("Students name and marks are required");
    }
    if(!Array.isArray(students.marks)){
        throw new Error("This should be an array")
    }

    const maxPerSubject:number = 100;
    const tatal:number = students.marks.reduce((total,num)=>total + num,0);
    const percentage:number = Math.round((tatal*maxPerSubject)/(students.marks.length * maxPerSubject));

    //Grade determination
    let grade: string;
    if (percentage >= 90 && percentage <= 100) {
        grade = "Grade A";
    } else if (percentage >= 75 && percentage < 90) {
        grade = "Grade B";
    } else if (percentage >= 50 && percentage < 75) {
        grade = "Grade C";
    } else {
        grade = "Failed";
    }

        // Output the result
    console.log(`Name: ${students.name}`);
    console.log(`Percentage: ${percentage}%`);
    console.log(`Grade: ${grade}`);

}