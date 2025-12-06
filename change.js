console.log("change new");

console.log("Version 1 updated")

const people = [
  { firstName: "John", lastName: "Doe", age: 28, favouriteColor: "Blue" },
  { firstName: "Emily", lastName: "Stone", age: 22, favouriteColor: "Green" },
  { firstName: "Arjun", lastName: "Rao", age: 30, favouriteColor: "Red" },
  { firstName: "Priya", lastName: "Sharma", age: 26, favouriteColor: "Yellow" },
  { firstName: "Mark", lastName: "Wilson", age: 33, favouriteColor: "Purple" },
  { firstName: "Sara", lastName: "Lee", age: 24, favouriteColor: "Pink" },
  { firstName: "Daniel", lastName: "Kim", age: 29, favouriteColor: "Black" },
  { firstName: "Olivia", lastName: "Park", age: 21, favouriteColor: "Orange" }
];

// Optimized: Direct object creation without constructor overhead (more efficient for logging)
people.forEach(person => {
    const details = {
        userFirstName: person.firstName,
        userLastName: person.lastName,
        userAge: person.age,
        userFavouriteColor: person.favouriteColor
    };
    console.log(`${person.firstName}'s details: ${JSON.stringify(details)}`);
})


console.log("**Version 12**")

