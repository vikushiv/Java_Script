let sayhello=function(name){
    console.log(`Greeting message for ${name}`);
    console.log(`Hey ${name}`);
}

sayhello('john')


let fullNameMaker=function(firstName,SecondName){
    console.log('welcome to LCO');
    console.log(`happy to have you,${firstName} ${SecondName}`);
    
}

fullNameMaker('vikash','Gupta')




let myadder=function(num1,num2){
    let add=num1+num2;
    return add;

}
let add=myadder(5,9)
console.log(add);



let mymulti=function(num1,num2) {
    let num3=num1*num2;
    return num3
}

let mul=mymulti(8,9)
console.log(mul);




let guestuser=function(name='unName',course=0){
   return 'hello '+name+'and your course count is: '+course

}
console.log(guestuser('john',2));
