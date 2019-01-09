class Account {

  constructor(username) {
    this.username = username;

    // Start every acccount balance as 0 
    this.balance = 0;
  }

}

class Transaction {
  
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Deposit extends Transaction {
  
//a getter.... only calculates when called.
  get value() {
    return this.amount;
  }

}


class Withdrawal extends Transaction {
  
//a getter.... only calculates when called.
  get value() {
    return -this.amount;
  }

}








// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");
console.log(`Starting Balance: ${myAccount.balance}`);

t1 = new Deposit(120.00, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(10.00, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Withdrawal(50.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);

