// Global Variable

const globalVariable = "I am Global Variable";

class ClassLevelVariable{
    
    // declare and initialization without type.
     num = 10;
    
    // only declare with type
    num2 : number;
    
    // declare and initialization with type
    num3 : number = 20;


    // Any
    address1: any = "I am any bro";

    // String
    address2: string = "I am string value";
    
    // Object
    //newClass: NewClass = new NewClass();

    // float
    duration: number = 2.5;

    // static
    static company = "Google/Amazon";

    // array

    // constructor
    constructor(){
        this.num2 = 15;

        // I am any type data and can change dynamically. 
        this.address1 = 12334;

        /** I am string type variable and can't change dynamically */
        // this.address2 = 12132;

    }

    public getNum(): number{
        return this.num;
    }

}

// main is everywhere
console.log("globalVariable: " + globalVariable);
console.log("Static Value: " + ClassLevelVariable.company);
const object = new ClassLevelVariable();
var num = object.getNum();
console.log(num);

class NewClass{
    constructor(){
        console.log("I am NewClass's constructor");
    }
}