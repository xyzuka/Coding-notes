// Parent class 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear);
};

// Child class to inherit parent properties
const Student = function(firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear); // Calling the Person constructor function to prevent duplicate code with the call method
  this.course = course;
}

// Linking prototypes
// Always link before adding methods since this creates a new empty object to store the method
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

// Creating new student
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

// Calling the method with mike's properties
mike.introduce(); // "My name is Mike and I study Computer Science"

// Calling the method in the Person object after linking prototypes 
mike.calcAge(); // 17

// Fixing the prototype assignment of Student
Student.prototype.constructor = Student;
