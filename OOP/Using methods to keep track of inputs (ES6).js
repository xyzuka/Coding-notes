/**** using bank account example ****/

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // creating a empty array
    this.movement = [];
    // adding other misc properties
    this.locale = navigator.language;
  }
  
 // Note - To keep track of the 'movement' of money in his account, create a method which will update the movement property in the object Acccount

  deposit(value) {
    this.movement.push(value);
  }
  
  withdrawal(value) {
    this.movement.push(-value);
  }
  
  // Data encapsulation example - data privacy
  approveLoan(value) {
    return true;
  }
  
  requestLoan(value) {
    if(this.approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
    } 
  }
}

// creating new account
const acc1 = new Account('Jonas', 'EUR', 1111);

// Using newly created methods
acc1.deposit(100);
acc1.withdrawal(5);
acc1.requestLoan(1000);
