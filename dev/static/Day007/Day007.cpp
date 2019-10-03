#include <iostream>
using namespace std;

int main(int argc, char* argv[]) {

    /**
     * Simple For Loop
     *   - AND operator writted as &&
     *   - OR operator writted as ||
     *   - NOT operator writted as !
     *   - The order of evaluation from first to last: NOT, AND, OR
     */
    for (int i=0; i<1; i++) {
        cout << "1: CodeNewb2Pro: Day 006, While Loop" << endl;
    }

    for (int i=0; i<0; i++) {
        cout << "2: You should not see this line" << endl;
    }

    for (int i=0; false; i++) {
        cout << "3: You should not see this line" << endl;
    }

    for (; false;) {
        cout << "4: You should not see this line" << endl;
    }

    /**
     * Continue & Break Keyword
     */
    for (;;) {
        cout << "5: A for loop never end, luckily we have a break statement below" << endl;
        break;
    }

    int range = 99;
    cout << "6: Prime numbers up to " << range << ": ";
    for (int i=1; i<=range; i++) {
        bool isPrime = true;
        for (int j=i-1; j>1; j--) {
            if ( i%j == 0 ) {
                isPrime = false;
                break;
            }
        }
        if ( isPrime ) {
            cout << i << " ";
        }
    }
    cout << endl;

    /**
     * For Each Loop
     *   - Notice that for each loop is on C++11 or later
     *   - Compile the code using command "g++ Day007.cpp -std=c++11", with version c++11 specified
     */
    cout << "7: For each loop: ";
    int intArr[] = {1, 2, 3, 4};
    for (int i : intArr) {
        cout << i << " ";
    }
    cout << endl;
    
    return 0;
}
