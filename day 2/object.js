const user = {
    name : "dharmesh",
    age : "19",
    city : "IDAR",
}

console.log(user)//to print all the information
console.log(user['name'] )
console.log(user['age'] )
console.log(user['city'] ) 

/**
 * add data to the object
 */

let user_country = "India"
user["continent"] = "USA"
console.log(user)

/**
 * DELETNG object keys and object itself
 

delete user.country  
console.log(user) 

delete user['continent'] 
console.log(user) */

/**
 * 
 */

let person = {
    name : "Dharmesh",
    age : 19,
   address :{
    city : "IDAR",
    state : "gujarat",
    country : "India"

}
}

for( let key in person ){
    console.log(key,"=>",person[key]) 
}

console.log(object.keys(person))

console.log(object.values(person))

//Get both keys and the values
console.log(object.entries(person))

/**
 * cloning an object using assign 
 */

const new_person = object.assign({},person)
console.log(new_person) 

const new_person_1 = object.assign({},person,{role: "Developer"})
console.log(new_person_1)  