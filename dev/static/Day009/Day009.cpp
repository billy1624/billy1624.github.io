#include <iostream>
#include <string>
using namespace std;


class Card {
private:
    bool active;  // Card status
    double balance;  // Account balance
    int pin;  // ATM pin

    bool checkActive() {  // Check the account status, show warning if account inactive 
        if ( !active )
            cout << "Card Service Suspended, please contact bank hotline for help" << endl;
        return active;
    }

    bool checkPinMatch(int pin) {  // Check if the input pin match or not
        if ( this->pin != pin )
            cout << "Incorrect Pin, action cancelled!" << endl;
        return this->pin == pin;
    }

public:
    Card(bool active, double balance, int pin) {  // Init the card object
        this->active = active;
        this->balance = balance;
        this->pin = pin;
    }

    bool withdraw(int amount, int pin) {  // Withdraw money
        if ( !checkActive() || !checkPinMatch(pin) ) {  // Check if card is active & pin correct
            return false;
        }

        if ( amount <= 0 ) {  // Check valid amount of money to withdraw
            cout << "Invalid withdraw amount, should be larger than 0, withdraw cancelled!" << endl;
        }

        bool success = true;
        if ( balance >= amount ) {  // Enough money to withdraw
            balance -= amount;
            cout << "Withdraw $" << amount << ", updated balance: $" << balance << endl;
        } else {  // Not enough money to withdraw
            success = false;
            cout << "Withdraw $" << amount << ", balance: $" << balance << ", not enough balance, withdraw cancelled!" << endl;
        }

        return success;
    }

    bool deposit(int amount) {  // Deposit money
        if ( !checkActive() ) {  // Check if card is active
            return false;
        }

        if ( amount <= 0 ) {  // Check valid amount of money to deposit
            cout << "Invalid deposit amount, should be larger than 0, deposit cancelled!" << endl;
        }

        balance += amount;
        cout << "Deposit $" << amount << ", updated balance: $" << balance << endl;

        return true;
    }
};


class ATM {
private:
    bool inService;  // ATM service status
    string location;  // ATM location

    bool checkInService() {  // Check the ATM service status, if out-of-service then show some message
        if ( !inService )
            cout << "ATM Out-of-service, action cancelled!" << endl;
        return inService;
    }

public:
    ATM(bool inService, string location) {  // Init ATM with input
        this->inService = inService;
        this->location = location;
    }

    ATM() {  // Init ATM with defact value
        this->inService = false;
        this->location = "N/A";
    }

    bool withdraw(Card* card, int amount, int pin) {  // Withdraw money, using the Card::withdraw method handle the business flow
        if ( !checkInService() )  // Check ATM in service
            return false;
        return card->withdraw(amount, pin);  // Call Card Obj to do the withdraw
    }

    bool deposit(Card* card, int amount) {  // Deposit money, using the Card::deposit method handle the business flow
        if ( !checkInService() )  // Check ATM in service
            return false;
        return card->deposit(amount);  // Call Card Obj to do the deposit
    }
};


int main(int argc, char* argv[]) {

    /**
     * Object Creation
     */
    Card cardInactive = Card(false, 100.0, 123456);
    Card cardNormal = Card(true, 100.0, 123456);
    Card cardNoMoney = Card(true, 0.0, 123456);
    
    ATM atmNormal = ATM(true, "HK");
    ATM atmOutOfService = ATM();

    /**
     * Withdraw Money!!
     */
    cout << " 1: Withdraw $10 with Card:cardInactive on ATM:atmNormal" << endl;
    atmNormal.withdraw(&cardInactive, 10, 123456);

    cout << endl << " 2: Withdraw $101 with Card:cardNormal on ATM:atmNormal" << endl;
    atmNormal.withdraw(&cardNormal, 101, 000);

    cout << endl << " 3: Withdraw $10 with Card:cardNormal on ATM:atmNormal" << endl;
    atmNormal.withdraw(&cardNormal, 10, 123456);

    cout << endl << " 4: Withdraw $10 with Card:cardNoMoney on ATM:atmNormal" << endl;
    atmNormal.withdraw(&cardNoMoney, 10, 123456);

    cout << endl << " 5: Withdraw $10 with Card:cardInactive on ATM:atmOutOfService" << endl;
    atmOutOfService.withdraw(&cardInactive, 10, 123456);

    cout << endl << " 6: Withdraw $10 with Card:cardNormal on ATM:atmOutOfService" << endl;
    atmOutOfService.withdraw(&cardNormal, 10, 123456);

    cout << endl << " 7: Withdraw $10 with Card:cardNoMoney on ATM:atmOutOfService" << endl;
    atmOutOfService.withdraw(&cardNoMoney, 10, 123456);

    /**
     * Deposit Money!
     */
    cout << endl << " 8: Deposit $10 with Card:cardInactive on ATM:atmNormal" << endl;
    atmNormal.deposit(&cardInactive, 10);

    cout << endl << " 9: Deposit $10 with Card:cardNormal on ATM:atmNormal" << endl;
    atmNormal.deposit(&cardNormal, 10);

    cout << endl << "10: Deposit $10 with Card:cardNoMoney on ATM:atmNormal" << endl;
    atmNormal.deposit(&cardNoMoney, 10);

    cout << endl << "11: Deposit $10 with Card:cardInactive on ATM:atmOutOfService" << endl;
    atmOutOfService.deposit(&cardInactive, 10);

    cout << endl << "12: Deposit $10 with Card:cardNormal on ATM:atmOutOfService" << endl;
    atmOutOfService.deposit(&cardNormal, 10);

    cout << endl << "13: Deposit $10 with Card:cardNoMoney on ATM:atmOutOfService" << endl;
    atmOutOfService.deposit(&cardNoMoney, 10);
    
    return 0;
}
