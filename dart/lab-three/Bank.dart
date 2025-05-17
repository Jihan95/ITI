class Account {
  int? accountNumber;
  int? _balance;
  String? accountHolderName;

  Account(this.accountNumber, int balance, this.accountHolderName): _balance = balance;

  void deposit(int amount) {
    _balance = (_balance ?? 0) + amount;
    print("Deposit success");
  }

  void withdraw(int amount) {
    _balance = (_balance ?? 0) - amount;
  }

  void checkBalance() {
    print("Balance: ${_balance}");
  }

  int? get balance => _balance;
  void set balance(int? newBalance) => _balance = newBalance;
}

class SavingsAccount extends Account {
  double? interestRate;
  SavingsAccount(
    int accountNumber,
    int balance,
    String accountHolderName,
    this.interestRate,
  ) : super(accountNumber, balance, accountHolderName);
}

class CurrentAccount extends Account {
  double? overdraft;

  CurrentAccount(
    int accountNumber,
    int balance,
    String accountHolderName,
    this.overdraft,
  ) : super(accountNumber, balance, accountHolderName);

  @override
  void withdraw(int amount) {
    if (balance != null && overdraft != null) {
      if (amount <= balance! + overdraft!) {
        balance = balance! - amount;
        print("withdrawal allowed");
      } else {
        print("withdrawal not allowed");
      }
    }
  }
}

void main() {
  CurrentAccount acc = CurrentAccount(1111, 500, "Jihan", 1000);

  acc.withdraw(400); // ✅ Allowed — New balance: 100
  acc.withdraw(700); // ✅ Allowed — New balance: -600
  acc.withdraw(600); // ❌ Denied — would exceed overdraft limit
}
