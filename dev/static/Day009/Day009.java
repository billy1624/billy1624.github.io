class Card {
    private boolean active;  // Card status
    private double balance;  // Account balance
    private int pin;  // ATM pin

    private boolean checkActive() {  // Check the account status, show warning if account inactive 
        if ( !active )
            System.out.println("Card Service Suspended, please contact bank hotline for help");
        return active;
    }

    private boolean checkPinMatch(int pin) {  // Check if the input pin match or not
        if ( this.pin != pin )
            System.out.println("Incorrect Pin, action cancelled!");
        return this.pin == pin;
    }

    public Card(boolean active, double balance, int pin) {  // Init the card object
        this.active = active;
        this.balance = balance;
        this.pin = pin;
    }

    public boolean withdraw(int amount, int pin) {  // Withdraw money
        if ( !checkActive() || !checkPinMatch(pin) ) {  // Check if card is active & pin correct
            return false;
        }

        if ( amount <= 0 ) {  // Check valid amount of money to withdraw
            System.out.println("Invalid withdraw amount, should be larger than 0, withdraw cancelled!");
        }

        boolean success = true;
        if ( balance >= amount ) {  // Enough money to withdraw
            balance -= amount;
            System.out.println("Withdraw $" + amount + ", updated balance: $" + balance);
        } else {  // Not enough money to withdraw
            success = false;
            System.out.println("Withdraw $" + amount + ", balance: $" + balance + ", not enough balance, withdraw cancelled!");
        }

        return success;
    }

    public boolean deposit(int amount) {  // Deposit money
        if ( !checkActive() ) {  // Check if card is active
            return false;
        }

        if ( amount <= 0 ) {  // Check valid amount of money to deposit
            System.out.println("Invalid deposit amount, should be larger than 0, deposit cancelled!");
        }

        balance += amount;
        System.out.println("Deposit $" + amount + ", updated balance: $" + balance);

        return true;
    }
}


class ATM {
    private boolean inService;  // ATM service status
    private String location;  // ATM location

    private boolean checkInService() {  // Check the ATM service status, if out-of-service then show some message
        if ( !inService )
            System.out.println("ATM Out-of-service, action cancelled!");
        return inService;
    }

    public ATM(boolean inService, String location) {  // Init ATM with input
        this.inService = inService;
        this.location = location;
    }

    public ATM() {  // Init ATM with defact value
        this.inService = false;
        this.location = "N/A";
    }

    public boolean withdraw(Card card, int amount, int pin) {  // Withdraw money, using the Card::withdraw method handle the business flow
        if ( !checkInService() )  // Check ATM in service
            return false;
        return card.withdraw(amount, pin);  // Call Card Obj to do the withdraw
    }

    public boolean deposit(Card card, int amount) {  // Deposit money, using the Card::deposit method handle the business flow
        if ( !checkInService() )  // Check ATM in service
            return false;
        return card.deposit(amount);  // Call Card Obj to do the deposit
    }
}


public class Day009 {

    public static void main(String[] args) {

        /**
         * Object Creation
         */
        Card cardInactive = new Card(false, 100.0, 123456);
        Card cardNormal = new Card(true, 100.0, 123456);
        Card cardNoMoney = new Card(true, 0.0, 123456);
        
        ATM atmNormal = new ATM(true, "HK");
        ATM atmOutOfService = new ATM();

        /**
         * Withdraw Money!!
         */
        System.out.println(" 1: Withdraw $10 with Card:cardInactive on ATM:atmNormal");
        atmNormal.withdraw(cardInactive, 10, 123456);

        System.out.println("\n 2: Withdraw $101 with Card:cardNormal on ATM:atmNormal");
        atmNormal.withdraw(cardNormal, 101, 000);

        System.out.println("\n 3: Withdraw $10 with Card:cardNormal on ATM:atmNormal");
        atmNormal.withdraw(cardNormal, 10, 123456);

        System.out.println("\n 4: Withdraw $10 with Card:cardNoMoney on ATM:atmNormal");
        atmNormal.withdraw(cardNoMoney, 10, 123456);

        System.out.println("\n 5: Withdraw $10 with Card:cardInactive on ATM:atmOutOfService");
        atmOutOfService.withdraw(cardInactive, 10, 123456);

        System.out.println("\n 6: Withdraw $10 with Card:cardNormal on ATM:atmOutOfService");
        atmOutOfService.withdraw(cardNormal, 10, 123456);

        System.out.println("\n 7: Withdraw $10 with Card:cardNoMoney on ATM:atmOutOfService");
        atmOutOfService.withdraw(cardNoMoney, 10, 123456);

        /**
         * Deposit Money!
         */
        System.out.println("\n 8: Deposit $10 with Card:cardInactive on ATM:atmNormal");
        atmNormal.deposit(cardInactive, 10);

        System.out.println("\n 9: Deposit $10 with Card:cardNormal on ATM:atmNormal");
        atmNormal.deposit(cardNormal, 10);

        System.out.println("\n10: Deposit $10 with Card:cardNoMoney on ATM:atmNormal");
        atmNormal.deposit(cardNoMoney, 10);

        System.out.println("\n11: Deposit $10 with Card:cardInactive on ATM:atmOutOfService");
        atmOutOfService.deposit(cardInactive, 10);

        System.out.println("\n12: Deposit $10 with Card:cardNormal on ATM:atmOutOfService");
        atmOutOfService.deposit(cardNormal, 10);

        System.out.println("\n13: Deposit $10 with Card:cardNoMoney on ATM:atmOutOfService");
        atmOutOfService.deposit(cardNoMoney, 10);

    }
}
