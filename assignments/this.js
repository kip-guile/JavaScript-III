/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function catName (name) {
    console.log(this);
    return name;
}
catName('Garfield');

// Principle 2

// code example for Implicit Binding
const newObject = {
    name: 'Alexander',
    greetAlex: function (hello){
        console.log(this);
        console.log(this.name + ', ' + hello);
    },
};
newObject.greetAlex('How are you?');

// Principle 3

// code example for New Binding
function GameConsoles (name, company, price){
    this.name = name;
    this.company = company;
    this.price = function(){
        console.log(price * 150);
    }
}
let console1 = new GameConsoles('Playstation', 'Sony', 50);
let console2 = new GameConsoles('xbox', 'microsoft', 47);
console1.price();
console2.price();
console.log(console1);

// Principle 4

// code example for Explicit Binding
function cows (color, type){
    return color + ' cows are ' + type;
}

console.log(cows.call('fixThis', 'Black', 'Fat'));
console.log(cows.apply('fixThis', ['White', 'Thin']));
var copyFunction = cows.bind('fixThis');