public class Day007 {
    public static void main(String[] args) {

        /**
         * Simple For Loop
         *   - AND operator writted as &&
         *   - OR operator writted as ||
         *   - NOT operator writted as !
         *   - The order of evaluation from first to last: NOT, AND, OR
         */
        for (int i=0; i<1; i++) {
            System.out.println("1: CodeNewb2Pro: Day 006, While Loop");
        }

        for (int i=0; i<0; i++) {
            System.out.println("2: You should not see this line");
        }

        // for (int i=0; false; i++) {  // Error: unreachable code
        //     System.out.println("3: You should not see this line");
        // }

        // for (; false;) {  // Error: unreachable code
        //     System.out.println("4: You should not see this line");
        // }

        /**
         * Continue & Break Keyword
         */
        for (;;) {
            System.out.println("5: A for loop never end, luckily we have a break statement below");
            break;
        }

        int range = 99;
        System.out.print("6: Prime numbers up to " + range + ": ");
        for (int i=1; i<=range; i++) {
            boolean isPrime = true;
            for (int j=i-1; j>1; j--) {
                if ( i%j == 0 ) {
                    isPrime = false;
                    break;
                }
            }
            if ( isPrime ) {
                System.out.print(i + " ");
            }
        }
        System.out.println();

        /**
         * For Each Loop
         *   - Notice that for each loop is on C++11 or later
         *   - Compile the code using command "g++ Day007.cpp -std=c++11", with version c++11 specified
         */
        System.out.print("7: For each loop: ");
        int intArr[] = {1, 2, 3, 4};
        for (int i : intArr) {
            System.out.print(i + " ");
        }
        System.out.println();

    }
}
