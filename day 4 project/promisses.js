/**
 * promise from simran
 */

const simranPromise = new Promise((resolve,reject) => {
    let parentDecision = true

    if(parentDecision){
        resolve("yayy, ab shaadi ki taiyari karo",parentDecision)
    }else{
       reject("papa ne ias dhoond lia hai !,Sorry...",parentDecision)
    }

});//define an new promise

simranPromise.then((msg,pd) => {
    console.log("simran message: ", msg)
    console.log("parent decision was" ,pd)
    console.log("let's book the weddings venue")
}).catch((msg,pd) => {
    console.log("simran message: ", msg)
    console.log("parent decision was" ,pd) 
    console.log("tinder kaha ho yaar !")
}).finally(() => console.log("chalo life mein clerity mili"))
