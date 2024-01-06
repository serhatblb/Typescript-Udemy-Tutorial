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
///////////////////////////////////////////////////
//TypeScript - Functions
///////////////////////////////////////////////////
// 1)  Function
function add(a, b) {
    return a + b;
}
var toplam = add(2, 4);
console.log(toplam);
// void function
function bastir() {
    console.log("Serhat Bülbül");
}
bastir();
//examples
function birlestir(isim, soyisim) {
    return "".concat(isim, " +++ ").concat(soyisim);
}
var isim_soyisim = birlestir("Serhat", "Bulbul");
console.log(isim_soyisim);
//default parametre
function birlestir2(isim, soyisim) {
    if (soyisim === void 0) { soyisim = "Bulbul"; }
    return "".concat(isim, " +++ ").concat(soyisim);
}
var isim_soyisim2 = birlestir2("Serhat", "XXXXXX");
console.log(isim_soyisim2);
// 2) Optional Parametres - Arrow Function
// Optional Parametres
function carpim(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
var sonuc = carpim(4, 4, 7);
console.log(sonuc);
//Arrow Function
// function carpim2(a:number,b:number):number{
//     return a*b;
// }
var carpim2 = function (a, b) { return a * b; };
var sonuc2 = carpim2(4, 5);
console.log(sonuc2);
var bolme = function () { return console.log("Arrow function Serhat"); };
bolme();
function add2(a, b) {
    return a + b;
}
var degisken = add2(4, 5);
var degisken2 = add2("deg", "rad");
//let degisken = add2("serhat",4) // burada overloading oluyor iki çeşit değişkeni aynı anda veremiyoruz
console.log(degisken);
// 4) Rest Parameters
function toplamaIslemi() {
    var sayilar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sayilar[_i] = arguments[_i];
    }
    var toplam = 0;
    sayilar.forEach(function (num) { return toplam += num; });
    return toplam;
}
console.log(toplamaIslemi(1, 2, 3));
function toplamaIslemi2(a) {
    var sayilar = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sayilar[_i - 1] = arguments[_i];
    }
    console.log(a);
    var toplam = 0;
    sayilar.forEach(function (num) { return toplam += num; });
    return toplam;
}
console.log(toplamaIslemi2("Serhat", 1, 2, 3));
function stringToplama(message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(message + " " + names.join(", "));
}
stringToplama("Hello", "Serhat", "Ali", "Veli");
