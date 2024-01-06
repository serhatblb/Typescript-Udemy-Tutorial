///////////////////////////////////////////////////
//TypeScript - Data Types
///////////////////////////////////////////////////
// let age: number = 29;
// let firstname: string = "Serhat";
// let lastname: string = "Bulbul";
// let isUpdated: boolean = true;
// console.log(firstname, lastname)
// function display(id: any, name: string) {
//     console.log("Id= " + id + ", Name = " + name);
// }
// /////////////////////////////////////////////
// // Data Types - Number - String - Boolean
// let first: number = 123; //number
// let second: number = 0x37CF; //hexadecimal
// let third: number = 0o377; //octal
// let fourth: number = 0o101010; //binary
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);
// let employeeFirstName: string = "Serhat Bulbul";
// console.log(employeeFirstName);
// //////////////////////////////////////////////////
// let employeeName: string = "Serhat Bulbul";
// let employeeDept: string = "Finance";
// //Pre-ES6
// let employeDesc1: string = employeeName + " works in the " + employeeDept + " department.";
// console.log(employeDesc1)
// //Post-ES6
// let employeDesc2: string = `${employeeName} works in the ${employeeDept} department.`;
// console.log(employeDesc2);
// let isPresent: boolean = true;
// console.log(isPresent);
// /////////////////////////////////////////////
// // Data Types - Arrays
// let firstNames: string[] = ['Serhat', 'Ali', 'Veli']; // first Method
// console.log(firstNames);
// let firstNames2: Array < string > = ['Serhat', 'Ali', 'Veli2']; // second Method
// console.log(firstNames2);
// let arr = [1, 2, 3, 'Serhat', 'Bulbul', true, false];
// console.log(arr);
// let fruits: Array < string > ;
// fruits = ['Banana', 'Apple'];
// console.log(fruits);
// let ids: Array < number > ;
// ids = [122, 133, 144, 155];
// console.log(ids);
// let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 'Banana']
// let values2: Array < string | number > = ['Serhat', 'Ali', 'Veli2', 23, 33]; // second 
// console.log(fruits[1]);
// /////////////////////////////////////////////
// // Data Types - Tuple
// let Id: number = 1;
// let instructorName: string = 'Serhat';
// let instructor: [number, string] = [1, "Serhat"];
// var user: [number, string, boolean, number, string];
// user = [1, "Steve", true, 20, "Admin"]
// console.log(instructor, user);
// let employee33 = [
//     [1, "Steve"],
//     [2, "Bill"],
//     [3, "Jeff"]
// ];
// console.log(employee33)
// /////////////////////////////////////////////
// // Data Types - Object
// type Person = {
//     firstName: string,
//     lastName: string,
//     age: number,
//     jobTitle: string
// }
// let instructor2: Person;
// instructor2 = {
//     firstName: 'serhat',
//     lastName: 'Bulbul',
//     age: 28,
//     jobTitle: 'Web Developer'
// }
// console.log(instructor2.age);
// /////////////////////////////////////////////
// // Data Types - Enum
// enum Media {
//     Newspaper = 10,
//         Newsletter,
//         Magazine,
//         Book
// }
// console.log(Media.Magazine) //baslangic degerinden +1 koyarak sayıyor ve yazdırıyor
// console.log(Media[13]); // --> Book
// enum MediaP {
//     Newspaper = "NEWSPAPER",
//         Newsletter = "NEWSLETTER",
//         Magazine = "MAGAZINE",
//         Book = "BOOK"
// }
// console.log(MediaP.Newsletter); // --> NEWSLETTER
// console.log(MediaP['Newspaper']); // --> NEWSPAPER
// /////////////////////////////////////////////
// // Data Types - Union
// let codeee: string | number = "123";
// console.log(codeee);
// /////////////////////////////////////////////
// // Data Types - Any
// let someThing: any = "Hello";
// console.log(someThing);
// someThing = 33;
// console.log(someThing);
// someThing = {
//     firstName: "Serhat",
//     lastName: "Bulbul"
// }
// console.log(typeof (someThing));
// let arr22: any[] = ["Serhat", 222, true];
// console.log(arr22)
// /////////////////////////////////////////////
// // Data Types - Void
// function sayHello(): void {
//     console.log("Hello");
// }
// sayHello();
// /////////////////////////////////////////////
// // // Data Types - Never
// // function throwError(errorMsg: string): never {
// //     throw new Error(errorMsg);
// // }
// // throwError("Something went wrong serhat");
// // let someThing3: void = undefined; //null ve undefined deger atanıyor
// // // let nothing3: never = undefined; // null ve undefined bile  degeri atanamıyor
// // console.log(someThing3)
// // // console.log(nothing3)
// /////////////////////////////////////////////
// // Data Types - Inference
// let sayac = 0;
// console.log(typeof (sayac));
// // function increment(counter: number){
// //     return counter++;
// // }
// function increment(counter: number): number { // geriye donus tipi de number olşdu
//     return counter++;
// }
// let a = "some text";
// let b = 123;
// //a = b; //app.ts:196:1 - error TS2322: Type 'number' is not assignable to type 'string'
// function sum(a: number, b: number) {
//     return a + b;
// }
// let total: number = sum(10, 12);
// // let total: string = sum(10, 12); //app.ts:202:5 - error TS2322: Type 'number' is not assignable to type 'string'.
// /////////////////////////////////////////////
// // Data Types - Assertion
// let code: any = 123;
// let empCode = < number > code;
// console.log(typeof (empCode));
// interface Employee {
//     name: string;
//     code: number;
// }
// let employee12 = < Employee > {}
// console.log(typeof (employee12));
// employee12.name = "Serhat";
// console.log(employee12);
///////////////////////////////////////////////////
//TypeScript - Control Flow Statements
///////////////////////////////////////////////////
// 1)  If Else Ternary Operator
var x = 35;
var y = 25;
if (x > y) {
    console.log("".concat(x, " buyuktur ").concat(y));
}
else if (x < y) {
    console.log("".concat(x, " kucuktur ").concat(y));
}
else {
    console.log("".concat(x, " esit ").concat(y));
}
;
(x > y) ? console.log("".concat(x, " buyuktur ").concat(y)) : console.log("".concat(x, " kucuk veya esit ").concat(y));
// 2)  Switch Case
var day = 5;
switch (day) {
    case 0:
        console.log("Pazar");
        break;
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    default:
        console.log("1-7 arasinda sayi gir");
        break;
}
// 2)  For Loop
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 3; k++) {
            console.log(i, j, k);
        }
    }
}
var arr = [10, 20, 30, 40, 50];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) { // for of
    var item = arr_1[_i];
    console.log(item);
}
var str = "Serhat Bülbül";
for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
    var char = str_1[_a];
    console.log(char);
}
for (var index in str) { // for in yapisi index degerini veriyor
    console.log(index);
}
// 3) While Loop
var counter = 5;
while (counter < 5) {
    console.log(counter);
    counter++;
    if (counter === 3) {
        break;
    }
}
// 4) Do While Loop
do {
    console.log(counter);
    counter++;
} while (counter < 5);
