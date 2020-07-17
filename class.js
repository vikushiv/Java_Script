let myP=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("hurryu");
    })
})

myP.then(function(v){
    console.log(v);
    
})