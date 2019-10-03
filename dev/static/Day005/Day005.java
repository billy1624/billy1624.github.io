public class Day005 {
    public static void main(String[] args) {

        /**
         * Simple If Statements
         *   - AND operator writted as &&
         *   - OR operator writted as ||
         *   - NOT operator writted as !
         */
        if ( true )
            System.out.println(" 1: CodeNewb2Pro: Day 005, If… Else… Condition  // You should see this line :)");

        if ( false )
            System.out.println(" 2: You cannot see this message :(");

        if ( true && false )
            System.out.println(" 3: Not seeing this as well...");

        if ( false || !true )
            System.out.println(" 4: Nope...");

        /**
         * Presedent of Boolean Operators
         *   - The order of evaluation from first to last: NOT, AND, OR
         */
        if ( true && false || true )
            System.out.println(" 5: How about this line? A combination of AND, OR");
        if ( (true && false) || true ) // This is the same statement as above, using parentheses to show the presedent (more readable)
            System.out.println(" 6: This is the same boolean expression, but much more readable");

        if ( true && false || true && false )
            System.out.println(" 7: This one is confusing.... omg...");
        if ( (true && false) || (true && false) ) // This is the same statement as above, using parentheses to show the presedent (more readable)
            System.out.println(" 8: It is actually evaluate in this order...");

        /**
         * Boolean Variable
         */
        boolean print = true;
        if ( print )
            System.out.println(" 9: Printing this line using boolean variable");

        // Assigning the negation (NOT operator) of print
        print = !print;
        if ( print )
            System.out.println("10: Not printing this time...");

        // Using Equal To operator (==), asserting print equals to false (print == false) and print equals to true (print == true)
        if ( print == false && print == true )
            System.out.println("11: Not possible that variable print equals to TRUE and FALSE at the same time!");

        if ( print == false )
            System.out.println("12: Is print equals to FALSE?");

        if ( print = true )
            System.out.println("13: Oppppsy... What I just did?");

        if ( print == true )
            System.out.println("14: Is print equals to TRUE?");

        /**
         * Conditional Operator
         *   - An other way to write if statement, it will return a value (int, double, string...etc.)
         *   - Suitable for simple if statement that used to determine what value to return
         * Read more on https://www.tutorialspoint.com/cplusplus/cpp_conditional_operator.htm
         */
        int val;
        val = print == true ? 111 : 222;
        val = (print == true ? 111 : 222);
        System.out.println("15: val = " + val);

        val = print == true ? print != false ? 123 : 111 : 222;
        val = (print == true ? (print != false ? 123 : 111) : 222);
        System.out.println("16: val = " + val);

        /**
         * Nested If
         */
        if ( false ) {
            System.out.println("Nope...");
        } else if ( false ) {
            System.out.println("Nope...");
        } else {
            System.out.println("17: Yessss...");
        }

        if ( true ) {
            System.out.println("18: Yeeeeeeep...");
        } else if ( true ) {
            System.out.println("Too late...");
        } else {
            System.out.println("Nope...");
        }

        if ( true ) {
            System.out.println("19: 1st level if...");
            if ( true ) {
                System.out.println("20: 2nd level if...");
            } else {
                System.out.println("Nope...");
            }
            if ( true ) {
                System.out.println("21: This will run after (20) finished, before exiting (19)'s 1st level if :)");
            }
        } else if ( true ) {
            System.out.println("Too late...");
        } else {
            System.out.println("Nope...");
        }

    }
}
