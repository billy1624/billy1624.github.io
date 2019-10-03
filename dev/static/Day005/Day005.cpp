#include <iostream>
using namespace std;

int main(int argc, char* argv[]) {

    /**
     * Simple If Statements
     *   - AND operator writted as &&
     *   - OR operator writted as ||
     *   - NOT operator writted as !
     */
    if ( true )
        cout << " 1: CodeNewb2Pro: Day 005, If… Else… Condition  // You should see this line :)" << endl;

    if ( false )
        cout << " 2: You cannot see this message :(" << endl;

    if ( true && false )
        cout << " 3: Not seeing this as well..." << endl;

    if ( false || !true )
        cout << " 4: Nope..." << endl;

    /**
     * Presedent of Boolean Operators
     *   - The order of evaluation from first to last: NOT, AND, OR
     */
    if ( true && false || true )
        cout << " 5: How about this line? A combination of AND, OR" << endl;
    if ( (true && false) || true ) // This is the same statement as above, using parentheses to show the presedent (more readable)
        cout << " 6: This is the same boolean expression, but much more readable" << endl;

    if ( true && false || true && false )
        cout << " 7: This one is confusing.... omg..." << endl;
    if ( (true && false) || (true && false) ) // This is the same statement as above, using parentheses to show the presedent (more readable)
        cout << " 8: It is actually evaluate in this order..." << endl;

    /**
     * Boolean Variable
     */
    bool print = true;
    if ( print )
        cout << " 9: Printing this line using boolean variable" << endl;

    // Assigning the negation (NOT operator) of print
    print = !print;
    if ( print )
        cout << "10: Not printing this time..." << endl;

    // Using Equal To operator (==), asserting print equals to false (print == false) and print equals to true (print == true)
    if ( print == false && print == true )
        cout << "11: Not possible that variable print equals to TRUE and FALSE at the same time!" << endl;

    if ( print == false )
        cout << "12: Is print equals to FALSE?" << endl;

    if ( print = true )
        cout << "13: Oppppsy... What I just did?" << endl;

    if ( print == true )
        cout << "14: Is print equals to TRUE?" << endl;

    /**
     * Conditional Operator
     *   - An other way to write if statement, it will return a value (int, double, string...etc.)
     *   - Suitable for simple if statement that used to determine what value to return
     * Read more on https://www.tutorialspoint.com/cplusplus/cpp_conditional_operator.htm
     */
    int val;
    val = print == true ? 111 : 222;
    val = (print == true ? 111 : 222);
    cout << "15: val = " << val << endl;

    val = print == true ? print != false ? 123 : 111 : 222;
    val = (print == true ? (print != false ? 123 : 111) : 222);
    cout << "16: val = " << val << endl;

    /**
     * Nested If
     */
    if ( false ) {
        cout << "Nope..." << endl;
    } else if ( false ) {
        cout << "Nope..." << endl;
    } else {
        cout << "17: Yessss..." << endl;
    }

    if ( true ) {
        cout << "18: Yeeeeeeep..." << endl;
    } else if ( true ) {
        cout << "Too late..." << endl;
    } else {
        cout << "Nope..." << endl;
    }

    if ( true ) {
        cout << "19: 1st level if..." << endl;
        if ( true ) {
            cout << "20: 2nd level if..." << endl;
        } else {
            cout << "Nope..." << endl;
        }
        if ( true ) {
            cout << "21: This will run after (20) finished, before exiting (19)'s 1st level if :)" << endl;
        }
    } else if ( true ) {
        cout << "Too late..." << endl;
    } else {
        cout << "Nope..." << endl;
    }
    
    return 0;
}
