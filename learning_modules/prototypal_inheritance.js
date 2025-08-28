// Prototypal inheritance
// In JavaScript, objects can inherit properties and methods from other objects.

// This is done through the prototype chain, where an object can have a prototype object that it inherits from.
// This allows for a more flexible and dynamic way of creating objects and sharing functionality.

const hero = {
    run: function () { console.log("Running...") },
    walk: function () { console.log("Walking...") },
    talk: function () { console.log("Talking...") },
    eat: function () { console.log("Eating...") },
}

// suppose we have a spoecial hero which is wizard
const wizard = {
    castSpell: function () { console.log("Casting spell...") },
    __proto__: hero // this is how we set the prototype of wizard to hero
}

// now wizard can use all the methods of hero
wizard.run() // Running...
wizard.walk() // Walking...
wizard.talk() // Talking...
wizard.eat() // Eating...
wizard.castSpell() // Casting spell...
console.log("wizard", wizard)
// this is how we can create a new object and set its prototype to an existing object


// This is the old way of using __proto__ prop on obj

// using object.create()
const superman = Object.create(hero)
superman.canKillBatman = true
console.log("superman", superman)

// checking if a property is inherited or not 
console.log(superman.hasOwnProperty("eat"))
console.log(superman.canKillBatman)


/// Using function constructors ///
function Dragon(name) {
    this.name = name
    this.breatheFire = function () { console.log("breathing fire...") }
}

Dragon.prototype = hero
const smog = new Dragon("Smog")
console.log("smog", smog)
smog.breatheFire()
console.log(smog.__proto__)


// using es6 class declarations
class Animal {
    constructor(isPet) {
        this.isPet = isPet
    }

    eat() {
        console.log("Eating...")
    }

    walk() {
        console.log("Walk...")
    }

    cute() {
        console.log(this.isPet)
    }
}

class Dog extends Animal {
    constructor(name, isPet) {
        super(isPet)
        this.name = name
    }

    bark() {
        console.log("Bark...")
    }
}

const jack = new Dog("Jack", true)
console.log(jack.hasOwnProperty("isPet"))
console.log("jack", jack)
jack.walk()
jack.eat()
jack.bark()
jack.cute()





const canFly = { fly: () => console.log("Flying!") };
const canSwim = { swim: () => console.log("Swimming!") };

function SuperHero(name) {
    this.name = name;
}

Object.assign(SuperHero.prototype, canFly, canSwim);

const aquaman = new SuperHero("Aquaman");
aquaman.swim(); // "Swimming!"
aquaman.fly();  // "Flying!"


// mixins

// reusable objects

const swimMixin = {
    swim: function () { console.log("swimming...") }
}

const walkMixin = {
    walk: function () { console.log("walking") }
}

class Doggy {
    constructor(name) {
        this.name = name
        // each obvject gets a copy of all the methods
        Object.assign(this, swimMixin, walkMixin )
    }

    bark() {
        console.log("walking")
    }

}

const jackie = new Doggy("Jack")
// NOTE: look the additional methods are added on the object itself
console.log("jackie", jackie)
jackie.bark()
jackie.swim()

function addMixin (base, ...mixins){
    Object.assign(base.prototype, ...mixins)
}

class Cat {
    constructor (name){
        this.name = name
    }

    meow(){
        console.log("meow...")
    }
}

addMixin(Cat, swimMixin, walkMixin)

const chiru = new Cat("chiru")
// NOTE: that all the methods in mixins are added on the prototype
console.log("chiru", chiru)




// mixings with classes
function canFlyBroom (base){
    return class extends base {
        fly(){
            console.log("flying broom...")
        }
    }
}

function canCastSpell (base){
    return class extends base {
        castSpell(){
            console.log("Casting leviosa...")
        }
    }
}

class Witch{
    constructor(name){
        this.name = name
    }

    cookPotion(){
        console.log("making roop badal kadha...")
    }
}

const superWitch = canFlyBroom(canCastSpell(Witch))
const hermoine = new superWitch("Hermoine")
// here all the methods are added on the protype
console.log("hermoine", hermoine)










