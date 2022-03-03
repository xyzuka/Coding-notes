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
