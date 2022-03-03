const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
}

// Creating a new object called Brandon and linking the prototype
const Brandon = Object.create(PersonProto);

// Creating a new object caled StudentProto and linking the prototype (the prototype is in the arguement)
const StudentProto = Object.create(PersonProto);

// Creating new methods for StudentProto
StudentProto.init = function(firstName, birthYear, course) {
  // reusing parent method
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

// Creating a student linked to the Student Prototype
const jay = Object.create(StudentProto);

// Using the newly created methods
jay.init('Jay', 2010, 'Computer Science');
jay.introduce

// Calling inherited methods
jay.calcAge();
