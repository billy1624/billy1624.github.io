public class Day006 {
    public static void main(String[] args) {

        /**
         * Simple While Loop
         *   - AND operator writted as &&
         *   - OR operator writted as ||
         *   - NOT operator writted as !
         *   - The order of evaluation from first to last: NOT, AND, OR
         */
        do {
            System.out.println(" 1: CodeNewb2Pro: Day 006, While Loop");
        } while ( false );

        boolean print = false;
        // while ( false ) {  // Error: unreachable statement
        //     System.out.println(" 2: You should not see this line");
        // }
        while ( print ) {
            System.out.println(" 2: You should not see this line");
        }

        // while ( 0 ) {  // Invalid in Java!
        //     System.out.println(" 3: You should not see this line");
        // }

        // while ( false && true ) {  // Error: unreachable statement
        //     System.out.println(" 4: You should not see this line");
        // }
        while ( print && !print ) {
            System.out.println(" 4: You should not see this line");
        }

        /**
         * With Boolean Variable
         */
        print = true;
        while ( print ) {
            System.out.println(" 5: Printing this line using boolean variable");
            print = !print;
        }

        do {
            System.out.println(" 6: Printing this line using boolean variable & Do... While...");
        } while ( print );

        /**
         * Continue & Break Keyword
         */
        int count = 0;
        while ( count <= 10 ) {
            System.out.println(" 7: count=" + count + ", Hi there!");
            if ( count == 8 ) {
                System.out.println(" 8: count=" + count + ", count is 9, continue");
                count++;
                continue;
            }
            if ( count%2 == 0 )
                System.out.println(" 9: count=" + count + ", the number in count is a multiple of 2!");
            if ( count == 9 ) {
                System.out.println("10: count=" + count + ", count is now 9, break!");
                break;
            }
            count++;
        }
        System.out.println("11: count=" + count + ", end");

    }
}
