var Welcome = /** @class */ (function () {
    function Welcome() {
    }
    // public greet(): void{
    //     console.log("Welcome TypeScript!!");
    // }
    Welcome.prototype.greet = function () {
        console.log("Welcome TypeScript!!");
    };
    return Welcome;
}());
// no need main like java. main is everywhere heheheh.
var object = new Welcome();
object.greet();
