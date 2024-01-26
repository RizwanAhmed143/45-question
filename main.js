"use strict";
//Q.1 installation vs code, node js, typescript
// Q.3
// let personName = "Eric"
// console.log(`Hello ${personName}, would you like to learn some Pyhton today?`); //use backtack
// Q.4
// let personName = "John lennon"
// console.log(personName.toLowerCase())
// console.log(personName.toUpperCase())
// console.log(personName.charAt(0)+ personName.slice(1))
// Q.5
// console.log(
//     'Elenore Roosevelt once said, "Do one thing everyday that scares you."'
// )
// Q.6
// let famous_person:string = "Elenore Roosevelt"
// let message:string = "Do one thing everyday that scares you."
// console.log(`${famous_person} once said,"${message}"`);
// Q.7 Stripping names white space characters
// console.log("HelloWorld")
// console.log("Hello\tWorld") add space
// console.log("Hello\nWorld") add new line 
// let fname ="Ahmed\tShah"
// let fname1 = "Ahmed\nShah"
// console.log(fname);
// console.log(fname1); 
// Q.8 Arthimatic ops
// let a:number =10
// let b:number =5
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// Q.9
// console.log(5+3);
// console.log(18-10);
// console.log(2*4);
// console.log(16/2);
// Q.10
// let num:number = 4
// console.log(`my favorite number is ${num}`)
// Q.11
// addition program
// let a:number = 10
// let b:number = 20
// console.log(`${a} + ${b}=${a+b}`)
// // substraction program
// console.log(`${b} - ${a}=${b-a}`)
// Q.12 Array
let names = ["Ahmed Shah", "Bilal Fareed", "Tehseen Afzal"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// let message = "is the founder of IT MATE PAKISTAN"
// console.log(names[0] +" " + message)
// console.log(names[1] +" " + message)
// console.log(names[2] +" " + message)
// Q.13 
// let vehicles:string[] =[
//     "Honda Motorcycle",
//     "Honda City",
//     "Honda Civic",
//     "BMW",
//     "Audi R8"
// ];
// vehicles.map((item) => console.log(`I would like to buy a ${item}`)
// );
// Q. 14
// let guestArr:string[] = ["Ali","Adil","Shahbaz"]
// guestArr.map((item) =>(
//     console.log(`Dear ${item}, You are invited to a dinner`)
// )) 
// Q.15
// let canNotAttend = "Adil"
// console.log(guestArr)
// console.log(canNotAttend + " " + "Can not make it for dinner ")
// let newGuest :string = "Hammad"
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// guestArr.map((item) =>(
//     console.log(`Dear ${item}, You are invited to a dinner`)
// )) 
// Q.16
let guestArr = ["Ali", "Adil", "Shahbaz"];
let canNotAttend = "Adil";
let newGuest = "Hammad";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((item) =>(
//     console.log(`Dear ${item} I found a bigger diner table`)
// ))
let guestBegin = "Faiz";
guestArr.unshift(guestBegin);
//   console.log(guestArr);
let middleGuest = "Rizwan";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
//   console.log(guestArr)
guestArr.push("Tahir");
//   console.log(guestArr)
// guestArr.map((item) =>(
//     console.log(`Dear ${item}, You are invited to a dinner`)
// )) 
// Q.17
// console.log("I can only invite two people to Dinner")
// while(guestArr.length>2) {
// let removeGuest = guestArr.pop()
// console.log(`Dear ${removeGuest}, You are not invited to the Dinner`)
// } 
// guestArr.map((item) =>(
//     console.log(`Dear, ${item} You are still invited the the Dinner`)
// )) 
// guestArr.pop()
// guestArr.pop()
// console.log(guestArr)
// Q.18 
// let countryArr = ["Pakistan",
// "India",
// "Argentina",
// "Zimbabwe",
// "America",
// "Bangladesh"];
// console.log(countryArr);
// console.log(countryArr.sort());
// console.log(countryArr);
// console.log(countryArr.reverse());
// console.log(countryArr);
// let sortedArray = [
// "Pakistan",
// "India",
// "Argentina",
// "Zimbabwe",
// "America",
// "Bangladesh"
// ];
// sortedArray.sort();
// console.log(sortedArray);
// sortedArray.reverse();
// console.log(sortedArray);
// Q.19
// console.log(guestArr.length + " peoples" + " are inivited to Dinner")
// Q.20
// let progLanguages =["HTML", "CSS", "JavaScript/TypeScript","PHP"]
// progLanguages.map((item)=>(
//     console.log (item})
// ))
