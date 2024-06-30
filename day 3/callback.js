
function greet(name,callback){
    const greeting = "Hello " + name
    callback(greeting) 
}

function displayGreeting(message){
    console.log(message) 
}

greet("Dharmesh" , displayGreeting) 

/**
 * callback hell | pyramid of doom 
 */

getUser(function(user){  
    getPosts(user,id,function(post){
        displayUserInformation(user,posts,function(){
            console.log("user info and posts successfully displayed")
        })
    })
})