const f1Promise = new Promise((resolve, reject) => {

    setTimeout(()=>{
        
        if(Math.random() > 0.5){
            resolve("friend 1 :hey i am in for goa")
        }else{
            reject("friend 1 :sorry meri billi bimar hai !")
        }
    },3000)
})

const f2Promise = new Promise((resolve, reject) => {

    setTimeout(()=>{
        
        if(Math.random() > 0.5){
            resolve("friend 2 :hey i am in for goa")
        }else{
            reject("friend 2 :sorry mere pet me dard hai !")
        }
    },2000)
})

const f3Promise = new Promise((resolve, reject) => {

    setTimeout(()=>{
        
        if(Math.random() > 0.5){
            resolve("friend 3 :hey i am in for goa")
        }else{
            reject("friend 3 :sorry mujhe pw skill ka live session attend karna hai !")
        }
    },1000)
})

Promise.all([f1Promise,f2Promise,f3Promise]).then((msg)=>{
    console.log(msg)
    console.log("Yay we are going Goa !")
}).catch((msg)=>{
    console.log(msg)
    console.log("Yarr band karo goa ka plan banana ")
})