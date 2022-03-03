/**** Encapsulation: Protected Properties and Methods ****/

// Encapsulation - protecting certain properties and methods
// A simple convention to protect properties and data from being accessed from the public is to add a _ in front of properties

/**** using bank account example ****/

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    /**** PROTECTING PROPERTIES - Add a _ in front of the property name****/
    this._movement = [];
    // adding other misc properties
    this.locale = navigator.language;
  }
  
 // Note - To keep track of the 'movement' of money in his account, create a method which will update the movement property in the object Acccount

  // Public interface
  deposit(value) {
    this._movement.push(value);
  }
  
  withdrawal(value) {
    this._movement.push(-value);
  }
  
  // Data encapsulation example - data privacy
  _approveLoan(value) {
    return true;
  }
  
  requestLoan(value) {
    if(this._approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
    } 
  }
  
  // lets users access movemenets but NOT OVERRIDE them
  getMovement() {
    return this._movement;
  }
}

// creating new account
const acc1 = new Account('Jonas', 'EUR', 1111);

// Using newly created methods
acc1.deposit(100);
acc1.withdrawal(5);
acc1.requestLoan(1000);
console.log(acc1.getMovement());

/*********************************************************************/

/**** Private fields and Methods ****/

// There are new class features being developed with ES6, a few include: 
// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods

/**** rearranging the properties as fields ****/

// NOTE - ONLY WORKS ON GOOGLE CHROME AT THE TIME OF WRITING - STILL IN DEVELOPMENT

class Account {
  constructor(owner, currency, pin) {
    // 1. Public fields (Instances)
    locale = navigator.language;
    
    //2. Private fields (# makes a property private)
    #movement = [];
    #pin; // same as creating a empty variable 
    
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; // redefining it based on the value we have received to make the pin a private field
    // this._movement = [];
    // this.locale = navigator.language;
  }
  
  // 3. Public methods
  // Public interface
  deposit(value) {
    this.#movement.push(value);
  }
  
  withdrawal(value) {
    this.#movement.push(-value);
  }
  
  requestLoan(value) {
    if(this.#approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
    } 
  }
  
  // lets users access movemenets but NOT OVERRIDE them
  getMovement() {
    return this.#movement;
  }
  
  // 4. Private Methods
  // Data encapsulation example - data privacy
  #approveLoan(value) {
    return true;
  }
}

// creating new account
const acc1 = new Account('Jonas', 'EUR', 1111);

// Using newly created methods
acc1.deposit(100);
acc1.withdrawal(5);
acc1.requestLoan(1000);
console.log(acc1.getMovement());

