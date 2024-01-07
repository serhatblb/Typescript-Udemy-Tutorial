///////////////////////////////////////////////////
//TypeScript - Data Types
///////////////////////////////////////////////////
let age: number = 29;
let firstname: string = "Serhat";
let lastname: string = "Bulbul";

let isUpdated: boolean = true;
console.log(firstname, lastname)

function display(id: any, name: string) {
    console.log("Id= " + id + ", Name = " + name);
}
/////////////////////////////////////////////
// Data Types - Number - String - Boolean

let first: number = 123; //number
let second: number = 0x37CF; //hexadecimal
let third: number = 0o377; //octal
let fourth: number = 0o101010; //binary

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

let employeeFirstName: string = "Serhat Bulbul";

console.log(employeeFirstName);
//////////////////////////////////////////////////
let employeeName: string = "Serhat Bulbul";
let employeeDept: string = "Finance";

//Pre-ES6
let employeDesc1: string = employeeName + " works in the " + employeeDept + " department.";
console.log(employeDesc1)

//Post-ES6
let employeDesc2: string = `${employeeName} works in the ${employeeDept} department.`;
console.log(employeDesc2);

let isPresent: boolean = true;
console.log(isPresent);

/////////////////////////////////////////////
// Data Types - Arrays

let firstNames: string[] = ['Serhat', 'Ali', 'Veli']; // first Method
console.log(firstNames);
let firstNames2: Array < string > = ['Serhat', 'Ali', 'Veli2']; // second Method
console.log(firstNames2);

let arr = [1, 2, 3, 'Serhat', 'Bulbul', true, false];
console.log(arr);

let fruits: Array < string > ;
fruits = ['Banana', 'Apple'];
console.log(fruits);

let ids: Array < number > ;
ids = [122, 133, 144, 155];
console.log(ids);

let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 'Banana']
let values2: Array < string | number > = ['Serhat', 'Ali', 'Veli2', 23, 33]; // second 

console.log(fruits[1]);

/////////////////////////////////////////////
// Data Types - Tuple

let Id: number = 1;
let instructorName: string = 'Serhat';

let instructor: [number, string] = [1, "Serhat"];

var user: [number, string, boolean, number, string];
user = [1, "Steve", true, 20, "Admin"]

console.log(instructor, user);

let employee33 = [
    [1, "Steve"],
    [2, "Bill"],
    [3, "Jeff"]
];
console.log(employee33)

/////////////////////////////////////////////
// Data Types - Object

type Person = {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
}

let instructor2: Person;
instructor2 = {
    firstName: 'serhat',
    lastName: 'Bulbul',
    age: 28,
    jobTitle: 'Web Developer'
}

console.log(instructor2.age);

/////////////////////////////////////////////
// Data Types - Enum

enum Media {
    Newspaper = 10,
        Newsletter,
        Magazine,
        Book
}
console.log(Media.Magazine) //baslangic degerinden +1 koyarak sayıyor ve yazdırıyor
console.log(Media[13]); // --> Book

enum MediaP {
    Newspaper = "NEWSPAPER",
        Newsletter = "NEWSLETTER",
        Magazine = "MAGAZINE",
        Book = "BOOK"
}

console.log(MediaP.Newsletter); // --> NEWSLETTER
console.log(MediaP['Newspaper']); // --> NEWSPAPER

/////////////////////////////////////////////
// Data Types - Union

let codeee: string | number = "123";
console.log(codeee);

/////////////////////////////////////////////
// Data Types - Any

let someThing: any = "Hello";
console.log(someThing);
someThing = 33;
console.log(someThing);
someThing = {
    firstName: "Serhat",
    lastName: "Bulbul"
}
console.log(typeof (someThing));

let arr22: any[] = ["Serhat", 222, true];
console.log(arr22)


/////////////////////////////////////////////
// Data Types - Void

function sayHello(): void {
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

let sayac = 0;

console.log(typeof (sayac));

// function increment(counter: number){
//     return counter++;
// }

function increment(counter: number): number { // geriye donus tipi de number olşdu
    return counter++;
}

let a = "some text";
let b = 123;

//a = b; //app.ts:196:1 - error TS2322: Type 'number' is not assignable to type 'string'

function sum(a: number, b: number) {
    return a + b;
}
let total: number = sum(10, 12);
// let total: string = sum(10, 12); //app.ts:202:5 - error TS2322: Type 'number' is not assignable to type 'string'.


/////////////////////////////////////////////
// Data Types - Assertion

let code: any = 123;

let empCode = < number > code;
console.log(typeof (empCode));

interface Employee {
    name: string;
    code: number;
}

let employee12 = < Employee > {}
console.log(typeof (employee12));

employee12.name = "Serhat";
console.log(employee12);



///////////////////////////////////////////////////
//TypeScript - Control Flow Statements
///////////////////////////////////////////////////

// 1)  If Else Ternary Operator

let x: number = 35;
let y: number = 25;

if (x > y){
    console.log(`${x} buyuktur ${y}`);
}else if (x < y){
    console.log(`${x} kucuktur ${y}`);
}else{
    console.log(`${x} esit ${y}`);
};

(x>y) ? console.log(`${x} buyuktur ${y}`) : console.log(`${x} kucuk veya esit ${y}`);


// 2)  Switch Case
let day : number = 5;

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

for(let i = 0; i<2; i++) {
    for(let j = 0; j < 3; j++) {
        for(let k = 0; k < 3; k++) {
            console.log(i, j, k);
        }
    }
}

let arr =[10,20,30,40,50];

for(let item of arr) {   // for of
    console.log(item)
}

let str = "Serhat Bülbül";
for (let char of str) {
    console.log(char);
}

for(let index in str){ // for in yapisi index degerini veriyor
    console.log(index);
}

// 3) While Loop

let counter = 5;
while(counter < 5) {
    console.log(counter);
    counter++;

    if(counter === 3) {
        break;
    }
}

// 4) Do While Loop

do {
    console.log(counter);
    counter++;
}while(counter<5)


///////////////////////////////////////////////////
//TypeScript - Functions
///////////////////////////////////////////////////

// 1)  Function
function add(a:number,b:number):number{ // function dan sonra dönüş tipini belirtebiliyoruz
    return a + b;
}
let toplam = add(2,4)
console.log(toplam)

// void function
function bastir():void{
    console.log("Serhat Bülbül");
}
bastir();

//examples
function birlestir(isim:string,soyisim:string):string{
    return `${isim} +++ ${soyisim}`;
}
let isim_soyisim = birlestir("Serhat","Bulbul")
console.log(isim_soyisim);

//default parametre

function birlestir2(isim:string,soyisim:string = "Bulbul"):string{
    return `${isim} +++ ${soyisim}`;
}
let isim_soyisim2 = birlestir2("Serhat", "XXXXXX")
console.log(isim_soyisim2);


// 2) Optional Parametres - Arrow Function
    // Optional Parametres
function carpim(a:number,b:number,c?:number){ // soru isareti koyarak opsiyonel yapiyoruz olsa da olur olmasa da
    if(typeof c !== 'undefined'){
        return a*b*c;
    }
    return a*b;
}
let sonuc = carpim(4,4,7);
console.log(sonuc);

    //Arrow Function

// function carpim2(a:number,b:number):number{
//     return a*b;
// }

let carpim2 = (a:number,b:number):number =>  a*b ;

let sonuc2 = carpim2(4,5);
console.log(sonuc2);

let bolme = () => console.log("Arrow function Serhat")
bolme();

// 3) Function Overloading

function add2(a:number,b:number):number;
function add2(a:string,b:string):string;

function add2(a:any, b:any): any{
    return a + b;
}
let degisken = add2(4,5);
let degisken2 = add2("deg","rad");
//let degisken = add2("serhat",4) // burada overloading oluyor iki çeşit değişkeni aynı anda veremiyoruz
console.log(degisken);

// 4) Rest Parameters
function toplamaIslemi(...sayilar:number[]):number{ // ... rest parametresi sonda olmali
    let toplam = 0;
    sayilar.forEach((num) => toplam += num);
    return toplam;
}

console.log(toplamaIslemi(1,2,3));

function toplamaIslemi2(a:string, ...sayilar:number[]):number{ // ... rest parametresi sonda olmali, string önce geldi
    console.log(a)
    let toplam = 0;
    sayilar.forEach((num) => toplam += num);
    return toplam;
}
console.log(toplamaIslemi2("Serhat",1,2,3));

function stringToplama(message:string, ...names:string[]){
    console.log(message +" "+ names.join(", "));
}
stringToplama("Hello", "Serhat", "Ali", "Veli");


///////////////////////////////////////////////////
//TypeScript - Classes
///////////////////////////////////////////////////

// 1) Class
class Person{
    id:number;
    firstName:string;
    lastName:string;

    constructor(ID:number,isim:string,soyisim:string){
        this.id = ID;
        this.firstName = isim;
        this.lastName = soyisim;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let kisiBilgisi = new Person(22,"Serhat","Bülbül")
console.log(kisiBilgisi);
console.log(kisiBilgisi.getFullName());
console.log(kisiBilgisi.id)

// 2) Access Modifiers(Public Private Prodected)
    // public : dışardan ulaşılabilir olur
    // private : class dısından ulaşılmaz olur
    // protected: inherit ettiği class tarafından ulaşılabilir

// 3) Readonly
class Araba {
    readonly modelYili:number;
    readonly marka:string;

    constructor(modelYili:number,marka:string){
        this.modelYili = modelYili;
        this.marka = marka;
    }
}
let arabam = new Araba(2022,"Dacia");
arabam.modelYili = 20333; // hata verir
console.log(arabam)


// 4) Inheritance
class Employee extends Person{ //child class Employee, parent class Person
    constructor(id:number,firstName:string,lastName:string){
        super(id,firstName,lastName); //super keyword ile Parent classın constructoru tetikleniyor
    }
}

let employee = new Employee(222,"Serhat22","Bülbül22")
console.log(employee)
console.log(employee.getFullName())

// 5) Static Methods - Properties
class Circle {
    static pi:number = 3.14;
    pi = 3;

    constructor(){
        this.pi++; // pi'yi arttırdı
        Circle.pi++; // static pi' yi arttırdı
    }

    static hesapla(yaricap:number){
        return this.pi * yaricap*yaricap;
    }
}

let objem = new Circle();
let objem2 = new Circle();

console.log(objem.pi);

console.log(Circle.pi);
console.log(Circle.hesapla(2));

// 6) Abstract Class
abstract class Department{
    constructor(public name:string){}

    printName(): void{
        console.log("Department name: "+ this.name);
    }

    abstract printMeeting():void;
}

class AccountingDepartment extends Department{
    constructor(){
        super("Accounting and Auditing");
    }

    printMeeting():void{
        console.log("Accounting Department meets each Monday at 10am.");
    }

    generateReports():void{
        console.log("Generating Accounting reports...");
    }
} 

let department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();


///////////////////////////////////////////////////
//TypeScript - Interface
///////////////////////////////////////////////////

// 1) Interface Nasil Kullanilir ?
interface PersonInterface {
    firstName:string,
    lastName:string
} // functionda verilen typeleri önceden burda tanımlıyoruz

function getFullName(person:PersonInterface){ //iterface i burda kullandık
    return `${person.firstName} ${person.lastName}`;
}
let person = {
    firstName: "Serhat",
    lastName: "Bülbül"
}
console.log(getFullName(person));

//2) Interface Optional Parameters Readonly Function Type
interface PersonInterface2 {
    readonly firstName2:string,
    lastName2:string,
    middleName2?: string // soru isareti ile optiona yapiyoruz
}
function getFullName2(person2:PersonInterface2){
    if(person2.middleName2){
        return `${person2.firstName2} ${person2.middleName2} ${person2.lastName2}`;
    }else{
        return `${person2.firstName2} ${person2.lastName2}`;
    }
    
}
let person2 = {
    firstName2: "Serhat",
    lastName2: "Bülbül",
    // middleName2: "Ali" 
}
console.log(getFullName2(person2));

let person22:PersonInterface2 = {
    firstName2: "Serhat",
    lastName2: "Bülbül",
    // middleName2: "Ali" 
}
// person22.firstName2 = "Ahmet" //readonly oldugu icin hata veriri
console.log(person22);

// --------- Interface Function Type ---------------------
interface StringFormat {
    (str:string, isUpper:boolean):string
}
let format: StringFormat;
format = function (str:string, isUpper:boolean){
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
}

console.log(format("serhat Bülbül",false)); // serhat bülbül
console.log(format("serhat Bülbül",true)); // SERHAT BÜLBÜL


//3) Interface Extend Etme ve Bir Class a Interface Implemente Etme
// interface IPerson {
//     name:string;
//     gender:string;
// }

// interface IEmployee extends IPerson {
//     employeeNumber : number;
// }

// interface IWorker extends IPerson {
//     employeeDepatments : string;
// }

// let employee: IEmployee = {
//     employeeNumber:1,
//     gender: "Erkek",
//     name: "Serhat"
// }
// console.log(employee);

// let employeDepartment: IWorker = {
//     employeeDepatments:"Engineer",
//     gender: "Erkek",
//     name: "Serhat"
// }
// console.log(employeDepartment);

interface IPerson {
    name:string;
    gender:string;
}

class Employee implements IPerson {
    empNumber:number;
    name:string;
    gender:string;
    constructor(empNumber:number, name:string, gender:string){
        this.empNumber = empNumber;
        this.name = name;
        this.gender = gender;
    }
}
let employee = new Employee(4,"Serhat", "Erkek");
console.log(employee);


