class User{
    constructor(firstName,middleName,lastName,credit){
        this.firstName=firstName;
        this.middleName=middleName;
        this.lastName=lastName;
        this.credit=credit;


    }
    getFullName(){
        return `${this.firstName} ${this.middleName} ${this.lastName} is my full name`
    }
    editName(newName){
        const myName=newName.split(' ')
        this.firstName=myName[0]
        this.middleName=myName[1]
        this.lastName=myName[2]
    }
}

class teacher extends user{
    // 
}

const viku=new User("Vikash","Gupta",10);
const pinsu=new User("Priyanshi","Vats",11);
const ravi=new User();
viku.editName("Vikash Kumar Gupta")
// console.log(viku);
// console.log(pinsu);
// pinsu.editName("Priyanshi Sharma")
console.log(viku.getFullName());
