///////////////////////////////////////////////////
//TypeScript - Data Types
///////////////////////////////////////////////////
// let age: number = 29;
// let firstname: string = "Serhat";
// let lastname: string = "Bulbul";
var myPerson = {
    id: 1,
    name: "Serhat",
    email: "serhat@hotmail.com",
    phone: "123445566"
};
console.log(myPerson);
var myCustomer = {
    credit: 112334,
    email: "serhat@hotmail.com",
    phone: "123445566",
    name: "Serhat"
};
console.log(myCustomer);
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error("Lutfen Dogru Formatta Data Gonderin");
}
console.log(add(1, 2)); //app.js:28 Uncaught Error: Lutfen Dogru Formatta Data Gonderin
// ----------------Instance Of Example ------------------------------
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isCreditAllowed = function () {
        //...
        return true;
    };
    return Customer;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        //...
        return true;
    };
    return Supplier;
}());
function singContract(partner) {
    var message;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? "Sing a new contract with the customer" : "Credit issue";
    }
    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? "Sing a new contract with the supplier" : "Need to evaluate further";
    }
    return message;
}
