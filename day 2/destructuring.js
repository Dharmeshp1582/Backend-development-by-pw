/**
 * destructuring in arrays
 */

const nums = [1,2,3]

const [a,b,c,d] = [1,2,3]
console.log(a)
console.log(b) 
console.log(c) 
console.log(d)//undefined


const[p,q,r] = [1,2,[3,4,5]]

console.log(p)
console.log(q) 
console.log(r) 


const per ={
    age : 19,
    Name : "Dharmesh",
    city : "Idar",
    address : {
        city : "Idar",
        state : "gujarat"
    }
}

const {Name,age,city,hobby,address} = per 
console.log(Name)
console.log(age)
console.log(hobby)
console.log(address) 
console.log(address['city'])
