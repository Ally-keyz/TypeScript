
interface Student{
    name:string;
    grade:number;
}

class student {
    name:string;
    grade:number;
    constructor(name:string,grade:number) {
        this.name = name;
        this.grade = grade;
    }
}

const commerade : Student = new student("Manzi",4);

console.log(commerade);