interface User{
    name:string;
    id:number
}

class userAccount{
    name:string;
    id:number;

    constructor(name:string,id:number){
        this.name = name;
        this.id = id;
    }
}

const user : User = new userAccount("Manzu",1);

console.log(user);