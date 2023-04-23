const fs  = require('fs');

// function errorHandling (err, data){
//     if(err){
//     console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// }



fs.writeFile('./demo.txt',"AWS>>Google Cloud", 'utf-8', (err)=>{
    // console.log("Successfull");
    if(err){
        console.log(err)
    }
    else{
        console.log("SUCCESFUL")
    }
})

// fs.readFile('demo.txt','utf-8',  (err, data)=>{
//     if(err){
//     console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// } );