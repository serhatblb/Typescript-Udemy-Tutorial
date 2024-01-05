///////////////////////////////////////////////////
//TypeScript - Data Types
///////////////////////////////////////////////////
var age = 29;
var firstname = "Serhat";
var lastname = "Bulbul";
var isUpdated = true;
console.log(firstname, lastname);
function display(id, name) {
    console.log("Id= " + id + ", Name = " + name);
}
/////////////////////////////////////////////
// Data Types - Number - String - Boolean
var first = 123; //number
var second = 0x37CF; //hexadecimal
var third = 255; //octal
var fourth = 33288; //binary
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
var employeeFirstName = "Serhat Bulbul";
console.log(employeeFirstName);
//////////////////////////////////////////////////
var employeeName = "Serhat Bulbul";
var employeeDept = "Finance";
//Pre-ES6
var employeDesc1 = employeeName + " works in the " + employeeDept + " department.";
console.log(employeDesc1);
//Post-ES6
var employeDesc2 = "".concat(employeeName, " works in the ").concat(employeeDept, " department.");
console.log(employeDesc2);
var isPresent = true;
console.log(isPresent);
/////////////////////////////////////////////
// Data Types - Arrays
var firstNames = ['Serhat', 'Ali', 'Veli']; // first Method
console.log(firstNames);
var firstNames2 = ['Serhat', 'Ali', 'Veli2']; // second Method
console.log(firstNames2);
var arr = [1, 2, 3, 'Serhat', 'Bulbul', true, false];
console.log(arr);
var fruits;
fruits = ['Banana', 'Apple'];
console.log(fruits);
var ids;
ids = [122, 133, 144, 155];
console.log(ids);
var values = ['Apple', 2, 'Orange', 3, 'Banana'];
var values2 = ['Serhat', 'Ali', 'Veli2', 23, 33]; // second 
console.log(fruits[1]);
/////////////////////////////////////////////
// Data Types - Tuple
var Id = 1;
var instructorName = 'Serhat';
var instructor = [1, "Serhat"];
var user;
user = [1, "Steve", true, 20, "Admin"];
console.log(instructor, user);
var employee33 = [
    [1, "Steve"],
    [2, "Bill"],
    [3, "Jeff"]
];
console.log(employee33);
var instructor2;
instructor2 = {
    firstName: 'serhat',
    lastName: 'Bulbul',
    age: 28,
    jobTitle: 'Web Developer'
};
console.log(instructor2.age);
/////////////////////////////////////////////
// Data Types - Enum
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 10] = "Newspaper";
    Media[Media["Newsletter"] = 11] = "Newsletter";
    Media[Media["Magazine"] = 12] = "Magazine";
    Media[Media["Book"] = 13] = "Book";
})(Media || (Media = {}));
console.log(Media.Magazine); //baslangic degerinden +1 koyarak sayıyor ve yazdırıyor
console.log(Media[13]); // --> Book
var MediaP;
(function (MediaP) {
    MediaP["Newspaper"] = "NEWSPAPER";
    MediaP["Newsletter"] = "NEWSLETTER";
    MediaP["Magazine"] = "MAGAZINE";
    MediaP["Book"] = "BOOK";
})(MediaP || (MediaP = {}));
console.log(MediaP.Newsletter); // --> NEWSLETTER
console.log(MediaP['Newspaper']); // --> NEWSPAPER
/////////////////////////////////////////////
// Data Types - Union
var codeee = "123";
console.log(codeee);
/////////////////////////////////////////////
// Data Types - Any
var someThing = "Hello";
console.log(someThing);
someThing = 33;
console.log(someThing);
someThing = {
    firstName: "Serhat",
    lastName: "Bulbul"
};
console.log(typeof (someThing));
var arr22 = ["Serhat", 222, true];
console.log(arr22);
/////////////////////////////////////////////
// Data Types - Void
function sayHello() {
    console.log("Hello");
}
sayHello();
/////////////////////////////////////////////
// // Data Types - Never
// function throwError(errorMsg: string): never {
//     throw new Error(errorMsg);
// }
// throwError("Something went wrong serhat");
// let someThing3: void = undefined; //null ve undefined deger atanıyor
// // let nothing3: never = undefined; // null ve undefined bile  degeri atanamıyor
// console.log(someThing3)
// // console.log(nothing3)
/////////////////////////////////////////////
// Data Types - Inference
var sayac = 0;
console.log(typeof (sayac));
// function increment(counter: number){
//     return counter++;
// }
function increment(counter) {
    return counter++;
}
var a = "some text";
var b = 123;
//a = b; //app.ts:196:1 - error TS2322: Type 'number' is not assignable to type 'string'
function sum(a, b) {
    return a + b;
}
var total = sum(10, 12);
// let total: string = sum(10, 12); //app.ts:202:5 - error TS2322: Type 'number' is not assignable to type 'string'.
/////////////////////////////////////////////
// Data Types - Assertion
var code = 123;
var empCode = code;
console.log(typeof (empCode));
var employee12 = {};
console.log(typeof (employee12));
employee12.name = "Serhat";
console.log(employee12);
///////////////////////////////////////////////////
//TypeScript - Control Flow Statements
///////////////////////////////////////////////////
