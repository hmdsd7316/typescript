// Global Variable
var globalVariable = "I am Global Variable";
var ClassLevelVariable = /** @class */ (function () {
    // array
    // constructor
    function ClassLevelVariable() {
        // declare and initialization without type.
        this.num = 10;
        // declare and initialization with type
        this.num3 = 20;
        // Any
        this.address1 = "I am any bro";
        // String
        this.address2 = "I am string value";
        // Object
        //newClass: NewClass = new NewClass();
        // float
        this.duration = 2.5;
        this.num2 = 15;
        // I am any type data and can change dynamically. 
        this.address1 = 12334;
        /** I am string type variable and can't change dynamically */
        // this.address2 = 12132;
    }
    ClassLevelVariable.prototype.getNum = function () {
        return this.num;
    };
    // static
    ClassLevelVariable.company = "Google/Amazon";
    return ClassLevelVariable;
}());
// main is everywhere
console.log("globalVariable: " + globalVariable);
console.log("Static Value: " + ClassLevelVariable.company);
var object = new ClassLevelVariable();
var num = object.getNum();
console.log(num);
var NewClass = /** @class */ (function () {
    function NewClass() {
        console.log("I am NewClass's constructor");
    }
    return NewClass;
}());
