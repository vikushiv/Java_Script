let getMyGrade=function(cm,tm){
    let p=(cm/tm)*100
    let myGrade=''

    if (p>=90) {
        myGrade='A'
        
    }else if (p>=80) {
        myGrade='B'
        
    }
    else if (p>=70) {
        myGrade='C'
        
    }
    else if (p>=60) {
        myGrade='d'
        
    }else{
        myGrade='F'
    }
    return `Your grade is ${myGrade} and percentage is ${p} `
}

let result=getMyGrade(92,100)
console.log(result);
