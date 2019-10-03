class Card {
    private boolean active;
    private double balance;
    private int pin;

    private boolean checkActive() {
        if ( !active )
            System.out.println("Card Service Suspended, please contact bank hotline for help");
        return active;
    }

    private boolean checkPinMatch(int pin) {
        if ( this.pin != pin )
            System.out.println("Incorrect Pin, action cancelled!");
        return this.pin == pin;
    }

    public Card(boolean active, double balance, int pin) {
        this.active = active;
        this.balance = balance;
        this.pin = pin;
    }

    public boolean withdraw(int amount, int pin) {
        if ( !checkActive() || !checkPinMatch(pin) ) {
            return false;
        }

        if ( amount <= 0 ) {
            System.out.println("Invalid withdraw amount, should be larger than 0, withdraw cancelled!");
        }

        boolean success = true;
        if ( balance >= amount ) {
            balance -= amount;
            System.out.println("Withdraw $" + amount + ", updated balance: $" + balance);
        } else {
            success = false;
            System.out.println("Withdraw $" + amount + ", balance: $" + balance + ", not enough balance, withdraw cancelled!");
        }

        return success;
    }

    public boolean deposit(int amount) {
        if ( !checkActive() ) {
            return false;
        }

        if ( amount <= 0 ) {
            System.out.println("Invalid deposit amount, should be larger than 0, deposit cancelled!");
        }

        balance += amount;
        System.out.println("Deposit $" + amount + ", updated balance: $" + balance);

        return true;
    }
}


class ATM {
    private boolean inService;
    private String location;

    private boolean checkInService() {
        if ( !inService )
            System.out.println("ATM Out-of-service, action cancelled!");
        return inService;
    }

    public ATM(boolean inService, String location) {
        this.inService = inService;
        this.location = location;
    }

    public ATM() {
        this.inService = false;
        this.location = "N/A";
    }

    public boolean withdraw(Card card, int amount, int pin) {
        if ( !checkInService() )
            return false;
        return card.withdraw(amount, pin);
    }

    public boolean deposit(Card card, int amount) {
        if ( !checkInService() )
            return false;
        return card.deposit(amount);
    }
}


public class Day010 {

    public static void main(String[] args) {

        Card cardInactive = new Card(false, 100.0, 123456);
        Card cardNormal = new Card(true, 100.0, 123456);
        Card cardNoMoney = new Card(true, 0.0, 123456);
        
        ATM atmNormal = new ATM(true, "HK");
        ATM atmOutOfService = new ATM();

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
