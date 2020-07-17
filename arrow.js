// const sayHello=function(name){
//     return"hy there, "+name+ "!"
// }


// console.log(sayHello("vikash"));


// const sayHello=(name)=>(`hey there ${name} !`)


// console.log(sayHello("vikash"));
// todo with six element 3 true 3 false create simple thing notdone title only

const Friends=[{
    title:'Vikash Gupta',
    isFriend:true
},{
    title:"Ravi Verma",
    isFriend:true
},{
    title:"Priyanshi Sharma",
    isFriend:true
},{
    title:"Arshad Amin",
    isFriend:false
},{
    title:"Amit Gupta",
    isFriend:false
},{
    title:"Rijul",
    isFriend:false
}

]


const notMyFriend=Friends.filter((friend)=> friend.isFriend===false)


console.log(notMyFriend);

