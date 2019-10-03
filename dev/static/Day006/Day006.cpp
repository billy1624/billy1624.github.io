#include <iostream>
using namespace std;

int main(int argc, char* argv[]) {

    /**
     * Simple While Loop
     *   - AND operator writted as &&
     *   - OR operator writted as ||
     *   - NOT operator writted as !
     *   - The order of evaluation from first to last: NOT, AND, OR
     */
    do {
        cout << " 1: CodeNewb2Pro: Day 006, While Loop" << endl;
    } while ( false );

    while ( false ) {
        cout << " 2: You should not see this line" << endl;
    }

    while ( 0 ) {
        cout << " 3: You should not see this line" << endl;
    }

    while ( false && true ) {
        cout << " 4: You should not see this line" << endl;
    }

    /**
     * With Boolean Variable
     */
    bool print = true;
    while ( print ) {
        cout << " 5: Printing this line using boolean variable" << endl;
        print = !print;
    }

    do {
        cout << " 6: Printing this line using boolean variable & Do... While..." << endl;
    } while ( print );

    /**
     * Continue & Break Keyword
     */
    int count = 0;
    while ( count <= 10 ) {
        cout << " 7: count=" << count << ", Hi there!" << endl;
        if ( count == 8 ) {
            cout << " 8: count=" << count << ", count is 9, continue" << endl;
            count++;
            continue;
        }
        if ( count%2 == 0 )
            cout << " 9: count=" << count << ", the number in count is a multiple of 2!" << endl;
        if ( count == 9 ) {
            cout << "10: count=" << count << ", count is now 9, break!" << endl;
            break;
        }
        count++;
    }
    cout << "11: count=" << count << ", end" << endl;
    
    return 0;
}
