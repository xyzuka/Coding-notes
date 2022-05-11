// Quick YT explaination -> https://www.youtube.com/watch?v=bq_jZY6Skto

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  
  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  
  greet() {
    console.log('Hey ${this.fullName}');
  }
  
  get age() {
    return 2037 - this.birthYear;
  }
  
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name; 
    else alert(`${name} is not a full name!`);
  }
  
  get fullName() {
    return this._fullName;
  }
  
  // Static method
  static hey() {
    console.log('Hey, there!');
  }
}

// Student class - extends ParentClassName, will link it
// The extends keyword will automaticaly link the prototype
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // super function always needs to happen first
    // accesses and call functions on an object's parent
    super(fullName, birthYear);
    this.course = course;
  }
  
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  
  // Overwritting parent methods example
  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`)
  }
}

const brandon = new StudentCl('Brandon Yee', 1997, 'Computer Sci');

// testing inherited parent methods and child methods
brandon.introduce();
brandon.calcAge();
