//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

//-- Complex JavaScript Object
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(Object.values(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name
    this.age = age
    


this.printInfo = () => {
    console.log("My name is" + " " + this.name +" " + "and i am "+ this.age)

    }
}

const c1 = new Person('April',27)
c1.printInfo

const countUp = (() => {
    let counter = 0;
    console.log('counter')
    return() => {counter++}
})()

console.log(countUp)

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const checkString = (str) => {
    return new Promise((resolve,reject) => {
        if (str.length > 10){
            resolve('Big word')
        }
        else{
            reject('Small Number')
        }
    })

}
console.log(checkString('Coding is not easy'))
console.log(checkString('Nice car'))

/*code wars
def multiply(a, b):
   return a * b

*/
multiply = function (a,b){
    return a*b;
}

/*code wars
def check_for_factor(base, factor):
    return base % factor == 0
*/
 
function checkForFactor(base, factor){
    return base / factor == 0
}