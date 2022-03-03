'use strict';

// Coding Challenge 1 - OOP

/*

1. Use a constructor function to implement a car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;

2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;

3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;

4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

*/

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    // let newSpeedAcc = (this.speed + 10);
    // console.log(newSpeedAcc);

    // updating the speed property 
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function() {
    // let newSpeedBrake = (this.speed - 5);
    // console.log(newSpeedBrake);

    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();

/******************** END *********************/

/* Coding Challenge 2 - ES6

1. Recreate Challenge 1, but using only ES6 classes;

2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);

3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);

4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

*/

class CarClass {
    constructor (make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() { 
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }
    
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    get speedUS() {
        return this.speed/1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

//creating new object
const ford = new CarClass('Ford', 120);

//checking miles
console.log(ford.speedUS);

//testing methods
ford.accelerate();
ford.accelerate();
ford.brake();

//setting the speed to test km conversion
ford.speedUS = 50;
console.log(ford);

/******************** END *********************/

// Coding Challenge 3 - Constructor Functions

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);

2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';

3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';

4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/

// Goal -> creating a sub class of the Car object and connecting their prototypes

/******************* SOLUTION *******************/

// parent object
const Car = function (make, currentSpeed) {
  this.make = make;
  this.currentSpeed = currentSpeed;
}

// Accelerate and brake methods
Car.prototype.accelerate = function() {
  this.currentSpeed += 20;
  this.charge--;
  console.log(`${this.make} is going at ${this.currentSpeed} km/h, with a charge of ${this.charge}%.`);
}

Car.prototype.brake = function() {
  this.currentSpeed -= 5;
  console.log(`${this.make} is going at ${this.currentSpeed} km/h, with a charge of ${this.charge}%.`);
}

// child object
const EV = function(make, currentSpeed, charge) {
  Car.call(this, make, currentSpeed);
  this.charge = charge;
}

// linking EV to Car -> to inherit the prototype properties of Car
EV.prototype = Object.create(Car.prototype)

// Implementing a recharge method
EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = 90;
  console.log(`${this.make} has been recharged, with a charge of ${this.charge}%.`);
}

const tesla = new EV('Tesla', 120, 23);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery();

// Fixing the prototype assignment of EV
EV.prototype.constructor = EV;

// If the child object has its own method that has the same name as its parent object (eg. Car.prototype.accelerate and EV.prototype.accelerate existing together) , the first method that appears will be run first but then the second method below will override the first method -> thus satisfying the definition of polymorphism (having different variations)

/******************** END *********************/

// Coding Challenge #4

/* 

1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class

2. Make the 'charge' property private;

3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chaining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

*/

/******************* SOLUTION *******************/

class CarCl {
  constructor(make, currentSpeed) {
    this.make = make;
    this.currentSpeed = currentSpeed;
  }
  
  // Methods
  accelerate() {
    this.currentSpeed += 10;
    console.log(`${this.make} is going at ${this.currentSpeed} km/h`);
    return this;
  }
  
  brake() {
    this.currentSpeed -= 5;
    console.log(`${this.make} is going at ${this.currentSpeed} km/h`);
    return this;
  } 
}

// Creating child object
class EVCl extends CarCl {
  // defining fields out the methd
  #charge;
  
  constructor(make, currentSpeed, charge) {
    super(make, currentSpeed);
    this.#charge = charge;
  }
  
  chargeBattery() {
    this.#charge = 90;
    console.log(`${this.make} has been recharged, with a charge of ${this.#charge}%.`);
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

// Testing chaining
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake()  
  .chargeBattery();

/******************** END *********************/
