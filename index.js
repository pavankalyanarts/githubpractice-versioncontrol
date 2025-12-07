// let val = "4";
// //switch uses strict comparison ""==="" where the type of the value should be matched.
// switch (val){
//     case 4:
//         console.log("It's a addition or multiplication");
//         break;
//     case 0:
//         console.log("It's a subtraction or divide");
//         break;
//     default:
//         console.log("Not a number!!!")

// }

//comparing objects will always give a false results
// let obj1 = {
//     name: "pavan", age: 25
// }
// let obj2 = {
//     name: "pavan", age: 25
// }

// console.log(obj1===obj2)

// for(let i=0; i<5; i++){
//     i < 4 ? console.log(`current value ${i}`) : console.log(`final value ${i}`)
// }
// console.log("=============================================")
// for(let i=0; i<5; ++i){
//     i < 4 ? console.log(`current value ${i}`) : console.log(`final value ${i}`)
// }


// let txt = "";

// loop1: for(let i=0; i<5; i++){
//     loop2: for(let j=0; j<5; j++){
//         if(j===3){break loop1};
//         txt += j
//     }
// }

// console.log(txt)


// let text = "Hello world, we going to be global tomorrow"

// const textArr = text.match(/world/)
// console.log(text.includes("world"))


// let x = sumAll(1, 123, 500, 115, 44, 88);

// function sumAll(){
//     let totalSum = 0;
//     for(let i=0; i<arguments.length; i++){
//         totalSum += arguments[i]
//     }

//     return totalSum;
// }



// console.log(x)

// Optimized constructor: Using Object.assign for cleaner property mapping
// function details(person){
//     Object.assign(this, {
//         userFirstName: person.firstName,
//         userLastName: person.lastName,
//         userAge: person.age,
//         userFavouriteColor: person.favouriteColor
//     });
// }

// const people = [
//   { firstName: "John", lastName: "Doe", age: 28, favouriteColor: "Blue" },
//   { firstName: "Emily", lastName: "Stone", age: 22, favouriteColor: "Green" },
//   { firstName: "Arjun", lastName: "Rao", age: 30, favouriteColor: "Red" },
//   { firstName: "Priya", lastName: "Sharma", age: 26, favouriteColor: "Yellow" },
//   { firstName: "Mark", lastName: "Wilson", age: 33, favouriteColor: "Purple" },
//   { firstName: "Sara", lastName: "Lee", age: 24, favouriteColor: "Pink" },
//   { firstName: "Daniel", lastName: "Kim", age: 29, favouriteColor: "Black" },
//   { firstName: "Olivia", lastName: "Park", age: 21, favouriteColor: "Orange" }
// ];

// // Optimized: Direct object creation without constructor overhead (more efficient for logging)
// people.forEach(person => {
//     const details = {
//         userFirstName: person.firstName,
//         userLastName: person.lastName,
//         userAge: person.age,
//         userFavouriteColor: person.favouriteColor
//     };
//     console.log(`${person.firstName}'s details: ${JSON.stringify(details)}`);
// })



// const person =  { firstName: "John", lastName: "Doe", age: 28, favouriteColor: "Blue" }

// let objValues = Object.values(person)
// for (let val in objValues){
//     console.log(objValues[val])
// }

// let date = new Date();

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// console.log(months[date.getMonth()]);

// console.log(Date.now());

// const date = new Date(1764524229295);
// console.log(date.toString());

// let today = new Date();
// let randDay = new Date();
// randDay.setFullYear(2100, 10, 24);
// console.log(randDay.toString());
// if(randDay > today){
//     console.log("Today's date is far lesser than 2100's")
// }else{
//     console.log("Today's date is far greater that 2100's")
// }

// let arr = [];
// for(let i=0;i<=5;i++){
//     arr[i]=i
// }
// console.log(arr);
// console.log(arr.toString());

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }

// for(let i in myObj.cars){
//     console.log(`CompayName: ${myObj.cars[i].name}
// Models:`);
//     for(let j in myObj.cars[i].models){
//         console.log(myObj.cars[i].models[j]);
//     }
//     console.log("==================================")
// }

function sendValues(val){
  let arr = []
  for (let i=0; i<=val; i++){
    arr += i;
  }

  return arr;
}

function valueIdentifier(val1, val2, myCallback){
  let sum = val1 + val2;

  return myCallback(sum);
}

let output = valueIdentifier(3, 4, sendValues)

console.log(output);

console.log("feature is live");


console.log("conflict_1");

