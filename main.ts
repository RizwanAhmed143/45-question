// //Q.1 installation vs code, node js, typescript
// // Q.3
// // let personName = "Eric"
// // console.log(`Hello ${personName}, would you like to learn some Pyhton today?`); //use backtack

// // Q.4
// // let personName = "John lennon"
// // console.log(personName.toLowerCase())
// // console.log(personName.toUpperCase())
// // console.log(personName.charAt(0)+ personName.slice(1))

// // Q.5
// // console.log(
// //     'Elenore Roosevelt once said, "Do one thing everyday that scares you."'
// // )

// // Q.6

// // let famous_person:string = "Elenore Roosevelt"
// // let message:string = "Do one thing everyday that scares you."

// // console.log(`${famous_person} once said,"${message}"`);

// // Q.7 Stripping names white space characters

// // console.log("HelloWorld")
// // console.log("Hello\tWorld") add space
// // console.log("Hello\nWorld") add new line 

// // let fname ="Ahmed\tShah"
// // let fname1 = "Ahmed\nShah"

// // console.log(fname);
// // console.log(fname1); 

// // Q.8 Arthimatic ops

// // let a:number =10
// // let b:number =5

// // console.log(a+b)
// // console.log(a-b)
// // console.log(a*b)
// // console.log(a/b)

// // Q.9

// // console.log(5+3);
// // console.log(18-10);
// // console.log(2*4);
// // console.log(16/2);

// // Q.10

// // let num:number = 4
// // console.log(`my favorite number is ${num}`)

// // Q.11
// // addition program
// // let a:number = 10
// // let b:number = 20
// // console.log(`${a} + ${b}=${a+b}`)
// // // substraction program
// // console.log(`${b} - ${a}=${b-a}`)

// // Q.12 Array
// // let names =["Ahmed Shah","Bilal Fareed", "Tehseen Afzal"]
// // console.log(names[0]);
// // console.log(names[1]);
// // console.log(names[2]);
// // let message = "is the founder of IT MATE PAKISTAN"
// // console.log(names[0] +" " + message)
// // console.log(names[1] +" " + message)
// // console.log(names[2] +" " + message)

// // Q.13 
// // let vehicles:string[] =[
// //     "Honda Motorcycle",
// //     "Honda City",
// //     "Honda Civic",
// //     "BMW",
// //     "Audi R8"
// // ];

// // vehicles.map((item) => console.log(`I would like to buy a ${item}`)
// // );
// // Q. 14

// // let guestArr:string[] = ["Ali","Adil","Shahbaz"]
// // guestArr.map((item) =>(
// //     console.log(`Dear ${item}, You are invited to a dinner`)
// // )) 

// // Q.15

// // let canNotAttend = "Adil"
// // console.log(guestArr)
// // console.log(canNotAttend + " " + "Can not make it for dinner ")


// // let newGuest :string = "Hammad"
// // guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// // guestArr.map((item) =>(
// //     console.log(`Dear ${item}, You are invited to a dinner`)
// // )) 

// // Q.16


// // let guestArr:string[] = ["Ali","Adil","Shahbaz"]
// // let canNotAttend = "Adil"
// // let newGuest :string = "Hammad"
// // guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// // // console.log(guestArr)
// // guestArr.map((item) =>(
// //     console.log(`Dear ${item} I found a bigger diner table`)
// // ))
//   let guestBegin:string = "Faiz"
//   guestArr.unshift(guestBegin)
// //   console.log(guestArr);
//   let middleGuest = "Rizwan"
//   let middleIndex = guestArr.length/2
//   guestArr.splice(middleIndex,0,middleGuest)
// //   console.log(guestArr)
//   guestArr.push("Tahir")
// //   console.log(guestArr)
// // guestArr.map((item) =>(
// //     console.log(`Dear ${item}, You are invited to a dinner`)
// // )) 

// // Q.17

// // console.log("I can only invite two people to Dinner")
// // while(guestArr.length>2) {
// // let removeGuest = guestArr.pop()
// // console.log(`Dear ${removeGuest}, You are not invited to the Dinner`)

// // } 
// // guestArr.map((item) =>(
// //     console.log(`Dear, ${item} You are still invited the the Dinner`)
// // )) 
// // guestArr.pop()
// // guestArr.pop()

// // console.log(guestArr)

// // Q.18 

// // let countryArr = ["Pakistan",
// // "India",
// // "Argentina",
// // "Zimbabwe",
// // "America",
// // "Bangladesh"];
// // console.log(countryArr);
// // console.log(countryArr.sort());
// // console.log(countryArr);
// // console.log(countryArr.reverse());
// // console.log(countryArr);

// // let sortedArray = [
// // "Pakistan",
// // "India",
// // "Argentina",
// // "Zimbabwe",
// // "America",
// // "Bangladesh"
// // ];
// // sortedArray.sort();
// // console.log(sortedArray);
// // sortedArray.reverse();
// // console.log(sortedArray);
 
// // Q.19

// // console.log(guestArr.length + " peoples" + " are inivited to Dinner")

// // Q.20

// // let progLanguages =["HTML", "CSS", "JavaScript/TypeScript","PHP"]
// // progLanguages.map((item)=>(
// //     console.log (item})
// // ))

/ Q 21.

// let person:{Name:string,fName:string,age:number} ={Name: "Rizwan", fName :"Ahmed", age :25};

// console.log(person);

// Q22.

// const programmingLanguage:string []=[
// "Phthon",
// "html",
// "css",
// "javascrit",
// "typescript"
// ];

// console.log(programmingLanguage[6])
// console.log(programmingLanguage[3])

// Q23.

// let car = "subaru";
// console.log("Is car =='subaru'? I predict true or I predict false.");
// console.log(car=='subaru')
// console.log(car =='Honda')
 
// let num:any = 23
// console.log("Is num ==23(in number)? I predit true O/wise false")
// console.log(num===23);
// console.log(num==="23")

// let color :string = "red";
// console.log("Is color==='red? I predirct true O/wise it is false");
// console.log(color==='red'),
// console.log(color==='yellow');

// let stdID:string = "PIAIC12345";
// console.log("Is stdID ==='PIAIC12345'? I predict true o/wise it is false");
// console.log(stdID==="PIAIC12345");
// console.log(stdID==="PIAIC2345");

// let food:string = "Continental";
// console.log("Is food==='Continental'? I predict true o/wise false");
// console.log(food==="Continental");
// console.log(food==="Sea food");


// Q.24
// // Tests for equality and inequality with strings
// const string1: string = "Hello";
// const string2: string = "hello";

// const isEqual: boolean = string1 === string2; // False, as the strings are not case-insensitive equal
// const isNotEqual: boolean = string1 !== string2; // True, as the strings are case-insensitive unequal

// // Tests using the lowercase function
// const lowerCaseString: string = string1.toLowerCase(); // "hello"

// console.log("Equality test:", isEqual); // Output: False
// console.log("Inequality test:", isNotEqual); // Output: True
// console.log("Lowercase conversion:", lowerCaseString); // Output: "hello"

// typescript
// Copy

// // Numerical tests
// const a: number = 5;
// const b: number = 3;

// const isEqual: boolean = a === b; // False
// const isNotEqual: boolean = a !== b; // True
// const isGreater: boolean = a > b; // True
// const isLess: boolean = a < b; // False
// const isGreaterOrEqual: boolean = a >= b; // True
// const isLessOrEqual: boolean = a <= b; // False

// // Logical tests
// const condition1: boolean = true;
// const condition2: boolean = false;

// const logicalAnd: boolean = condition1 && condition2; // False
// const logicalOr: boolean = condition1 || condition2; // True

// // Array test
// const array: number[] = [1, 3, 5, 7, 9];
// const itemToCheck: number = 5;

// const isInArray: boolean = array.includes(itemToCheck); // True

// console.log("Numerical tests:");
// console.log("Equality:", isEqual);
// console.log("Inequality:", isNotEqual);
// console.log("Greater than:", isGreater);
// console.log("Less than:", isLess);
// console.log("Greater than or equal to:", isGreaterOrEqual);
// console.log("Less than or equal to:", isLessOrEqual);

// console.log("Logical tests:");
// console.log("Logical AND:", logicalAnd);
// console.log("Logical OR:", logicalOr);

// console.log("Array test:");
// console.log(`Is ${itemToCheck} in the array?`, isInArray);

// const array: number[] = [1, 3, 5, 7, 9];
// const itemToCheck: number = 11;

// const isNotInArray: boolean = !array.includes(itemToCheck); // True

// console.log(`Is ${itemToCheck} not in the array?`, isNotInArray);

// Q.25

// let alien_Color: string = 'green';

// // //Pass the condition
// // let alien_Color: string = 'green';

// if (alien_Color === 'green') {
//   console.log("Player just earned 5 points");
// }

// // Fail the condition
// let alien_Color: string = 'red';

// if (alienColor === 'green') {
//   console.log("Player just earned 5 points");
// }

//Q26

// let alienColor: string = 'yellow';

// if (alienColor === 'green') {
//   console.log("Player just earned 5 points for shooting the alien");
// } else if (alienColor === 'yellow') {
//   console.log("Player just earned 10 points for shooting the alien");
// } else {
//   console.log("Player just earned 15 points for shooting the alien");
// }

// let alienColor: string = 'yellow';

// if (alienColor !== 'green') {
//   console.log("Player just earned 10 points for shooting the alien");
// }

// let alienColor: string = 'green';

// if (alienColor !== 'green') {
//   console.log("Player just earned 10 points for shooting the alien");
// } else {
//   console.log("Player just earned 5 points for shooting the alien");
// }

//Q27.

// let alienColor: string = 'green';

// if (alienColor === 'green') {
//   console.log("Player earned 5 points for shooting the alien");
// } else if (alienColor === 'yellow') {
//   console.log("Player earned 10 points for shooting the alien");
// }


// let alienColor: string = "red";

// if (alienColor === "red") {
// console.log("Congratulations! You earned 15 points!");
// }


// // Version 1 - green alien
// let alienColor1: string = 'green';

// if (alienColor1 === 'green') {
//   console.log("Player earned 5 points for shooting the alien");
// } else if (alienColor1 === 'yellow') {
//   console.log("Player earned 10 points for shooting the alien");
// } else if (alienColor1 === 'red') {
//   console.log("Player earned 15 points for shooting the alien");
// }

// // Version 2 - yellow alien
// let alienColor2: string = 'yellow';

// if (alienColor2 === 'green') {
//   console.log("Player earned 5 points for shooting the alien");
// } else if (alienColor2 === 'yellow') {
//   console.log("Player earned 10 points for shooting the alien");
// } else if (alienColor2 === 'red') {
//   console.log("Player earned 15 points for shooting the alien");
// }

// // Version 3 - red alien
// let alienColor3: string = 'red';

// if (alienColor3 === 'green') {
//   console.log("Player earned 5 points for shooting the alien");
// } else if (alienColor3 === 'yellow') {
//   console.log("Player earned 10 points for shooting the alien");
// } else if (alienColor3 === 'red') {
//   console.log("Player earned 15 points for shooting the alien");
// }

// Q28
// let age: number = 35;

// if (age < 2) {
// console.log("The person is a baby.");
// }
// else if (age >= 2 && age < 4) {
// console.log("The person is a toddler.");
// }
// else if (age >= 4 && age < 13) {
// console.log("The person is a kid.");
// }
// else if (age >= 13 && age < 20) {
// console.log("The person is a teenager.");
// }
// else if (age >= 20 && age < 65) {
// console.log("The person is an adult.");
// }
// else {
// console.log("The person is an elder.");
// }

// Q29.

// let favoriteFruits: string[] = ["banana", "mango", "strawberry"];

// if (favoriteFruits.includes("banana")) {
// console.log("You really like bananas!");
// }

// if (favoriteFruits.includes("mango")) {
// console.log("You really like mangoes!");
// }

// if (favoriteFruits.includes("strawberry")) {
// console.log("You really like strawberries!");
// }

// if (favoriteFruits.includes("apple")) {
// console.log("You like apples, too!");
// }

// if (favoriteFruits.includes("kiwi")) {
// console.log("You're a fan of kiwis, too!");
// }

// Q30.

// let usernames: string[] = ['admin', 'Alice', 'Bob', 'Charlie', 'admin123'];

// for (let username of usernames) {
//     if (username.toLowerCase() === 'admin') {
//         console.log(`Hello ${username}, would you like to see a status report?`);
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }

//Q31.

// let usernames: string[] = []; // Empty array initially

// if (usernames.length === 0) {
//     console.log('We need to find some users!');
// } else {
//     let age: number = 30; // You can set the age to any value

//     if (age < 2) {
//         console.log("The person is a baby.");
//     } else if (age >= 2 && age < 4) {
//         console.log("The person is a toddler.");
//     } else if (age >= 4 && age < 13) {
//         console.log("The person is a kid.");
//     } else if (age >= 13 && age < 20) {
//         console.log("The person is a teenager.");
//     } else if (age >= 20 && age < 65) {
//         console.log("The person is an adult.");
//     } else {
//         console.log("The person is an elder.");
//     }
// }

// Q32.

// let current_users: string[] = ['John', 'Alice', 'Bob', 'Charlie', 'Eve'];
// let new_users: string[] = ['Bob', 'Dave', 'Alice', 'Mallory', 'Frank'];

// for (let new_username of new_users) {
//     // Check if the new username is already in use (case-insensitive)
//     let usernameExists = current_users.some(
//         (existing_user) => existing_user.toLowerCase() === new_username.toLowerCase()
//     );

//     if (usernameExists) {
//         console.log(`The username '${new_username}' is not available. Please enter a new username.`);
//     } else {
//         console.log(`The username '${new_username}' is available.`);
//     }
// }

//Q33.

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let number of numbers) {
//     let ordinalEnding: string;

//     if (number === 1) {
//         ordinalEnding = "st";
//     } else if (number === 2) {
//         ordinalEnding = "nd";
//     } else if (number === 3) {
//         ordinalEnding = "rd";
//     } else {
//         ordinalEnding = "th";
//     }

//     console.log(`${number}${ordinalEnding}`);
// }


//Q34.

// let favoritePizzas: string[] = ['Margherita', 'Pepperoni', 'Vegetarian'];

// // Print the name of each pizza using a for loop
// console.log("Printing pizza names:");
// for (let pizza of favoritePizzas) {
//     console.log(pizza);
// }

// // Print a sentence for each pizza
// console.log("\nPrinting pizza statements:");
// for (let pizza of favoritePizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }

// // Add a line outside the loop expressing your love for pizza
// console.log("\nI really love pizza!");

//Q35.

// let commonCharacteristic: string = "great pet";
// let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// // Print the name of each animal using a for loop
// console.log("Printing animal names:");
// for (let animal of animals) {
//     console.log(animal);
// }

// // Print a statement about each animal
// console.log("\nPrinting statements about each animal:");
// for (let animal of animals) {
//     console.log(`A ${animal.toLowerCase()} would make a ${commonCharacteristic}.`);
// }

// // Add a line outside the loop stating the common characteristic
// console.log(`\nAny of these animals would make a ${commonCharacteristic}!`);

//Q36.

// function make_shirt(size: string, message: string): void {
//     console.log(`Shirt size: ${size.toUpperCase()}`);
//     console.log(`Message on the shirt: ${message}`);
// }

// // Calling the function with specific size and message
// make_shirt('medium', 'Hello World!');

//Q37.

// // Modified function with default values
// function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
//     console.log(`Shirt size: ${size.toUpperCase()}`);
//     console.log(`Message on the shirt: ${message}`);
// }

// // Calling the function with default values (large size, default message)
// make_shirt();

// // Calling the function with specific values (medium size, default message)
// make_shirt('medium');

// // Calling the function with specific values (any size, custom message)
// make_shirt('small', 'TypeScript is awesome!');

//Q38.

// // Function to describe a city and its country
// function describe_city(city: string, country: string = 'Default Country'): void {
//     console.log(`${city} is in ${country}.`);
// }

// // Calling the function for three different cities
// describe_city('Karachi', 'Pakistan');
//describe_city('New York'); // Defaults to 'Default Country'
//describe_city('Tokyo', 'Japan');


// //Q39.

// // Function to format city and country
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }

// // Calling the function with three city-country pairs
// let result1: string = city_country('Lahore', 'Pakistan');
// let result2: string = city_country('Paris', 'France');
// let result3: string = city_country('Sydney', 'Australia');

// // Printing the returned values
// console.log(result1);
// console.log(result2);
// console.log(result3);

//Q40.

// Function to create an album object
// function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
//     let album: Record<string, any> = {
//         artist: artist,
//         title: title,
//     };

//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }

//     return album;
// }

// // Making three dictionaries representing different albums
// let album1 = make_album('Artist1', 'Album1');
// let album2 = make_album('Artist2', 'Album2', 12); // Including the number of tracks
// let album3 = make_album('Artist3', 'Album3');

// // Printing each return value
// console.log(album1);
// console.log(album2);
// console.log(album3);


// //Q41.

// // Function to show magicians' names
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Array of magician's names
// let magicianNames: string[] = ['Bill batoorhi', 'Hamoon jadogar', 'Ainak wala jinn', 'Zagota jin', 'Rolla'];

// // Calling the function to show magicians' names
// show_magicians(magicianNames);


//Q42.

// // Function to show magicians' names
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Function to make magicians great
// function make_great(magicians: string[]): string[] {
//     // Use map to modify each magician's name
//     return magicians.map((magician) => `${magician} the Great`);
// }

// // Array of magician's names
// let magicianNames: string[] = ['Bill batoorhi', 'Hamoon jadogar', 'Ainak wala jinn', 'Zagota jin', 'Rolla'];

// // Calling make_great to modify the array
// let greatMagicians: string[] = make_great(magicianNames);

// // Calling the function to show magicians' names after modification
// show_magicians(greatMagicians);


//Q43.

// // Function to show magicians' names
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Function to make magicians great
// function make_great(magicians: string[]): string[] {
//     // Use map to modify each magician's name
//     return magicians.map((magician) => `${magician} the Great`);
// }

// // Array of magician's names
// let magicianNames: string[] = ['Bill batoorhi', 'Hamoon jadogar', 'Ainak wala jinn', 'Zagota jin', 'Rolla'];

// // Call make_great with a copy of the array
// let greatMagicians: string[] = make_great([...magicianNames]); // Using the spread operator to create a copy

// // Calling the function to show the original magicians' names
// console.log("Original Magicians:");
// show_magicians(magicianNames);

// // Calling the function to show magicians' names after modification
// console.log("\nMagicians with 'the Great':");
// show_magicians(greatMagicians);

// //Q44.

// // Function to summarize a sandwich order
// function order_sandwich(...items: string[]): void {
//     if (items.length === 0) {
//         console.log("You ordered an empty sandwich. Please add some items.");
//     } else {
//         console.log("Sandwich Order:");
//         for (let item of items) {
//             console.log(`- ${item}`);
//         }
//         console.log("Enjoy your sandwich!");
//     }
// }

// // Call the function with different numbers of arguments
// order_sandwich('Ham', 'Cheese', 'Lettuce');
// order_sandwich('Turkey', 'Swiss');
// order_sandwich();

//Q45.

// Function to store information about a car
// function create_car(manufacturer: string, model: string, ...options: Record<string, any>[]): Record<string, any> {
//   let car: Record<string, any> = {
//       manufacturer: manufacturer,
//       model: model,
//   };

//   // Loop through the options and add them to the car object
//   for (let option of options) {
//       Object.assign(car, option);
//   }

//   return car;
// }

// // Call the function with required information and additional name-value pairs
// let carInfo: Record<string, any> = create_car('Toyota', 'Camry', { color: 'Blue' }, { optionalFeature: 'Navigation' });

// // Print the returned object to verify the information
// console.log(carInfo);

