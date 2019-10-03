#include <iostream>
#include <string>
using namespace std;

int main(int argc, char* argv[]) {

    /** 
     * integer values
     * there are two type modifiers for int, signed & unsigned
     * for default, it is signed, that means the int variable can store negative value
     * while, unsigned means the int variable can ONLY store positive value
     * NOTE: zero is neither positive and negative, and so both signed & unsigned int can store zero
     * RANGE: 
     *            int: -2,147,483,648 to 2,147,483,647
     *     signed int: -2,147,483,648 to 2,147,483,647
     *   unsigned int: 0 to 4,294,967,295
     */
    int i1 = 123;
    int i2 = -123;
    unsigned int i3 = -123;  // Underflow
    int i4 = 2147483647 + 1;  // Overflow

    /**
     * Character
     * can store all character on ASCII table, see https://en.cppreference.com/w/cpp/language/ascii
     */
    char c1 = 'A';
    char c2 = 'b';
    char c3 = 90;  // Can use ASCII decimal number, '90' represent 'Z'
    
    /** 
     * Decimal Value
     * float have 7 decimal digits of precision
     * double have 14 decimal digits of precision
     * RANGE:
     *    float: +/- 3.4e +/- 38 (~7 digits)
     *   double: +/- 1.7e +/- 308 (~15 digits)
     * NOTE:
     *   For float, put "f" behind the value indicating it's a float value, otherwise all decimal value in C++ treated as double value
     */
    float f1 = 123.002f;
    float f2 = -123.002f;
    double d1 = 123.002;
    double d2 = -123.002;

    /**
     * Boolean Value
     * either true or false, also represented by 1 or 0
     */
    bool b1 = true;  // Printed as 1
    bool b2 = false;  // Printed as 0
    bool b3 = 1;  // Printed as 1
    bool b4 = 0;  // Printed as 0

    /**
     * String
     */
    string s1 = "CodeNewb2Pro: Day 004, Data Types";
    string s2 = "========= Happy Coding! =========";

    /** 
     * Print out all the values
     */
    cout << "int i1 = " << i1 << endl;
    cout << "int i2 = " << i2 << endl;
    cout << "int i3 = " << i3 << " (Example of Underflow)" << endl;
    cout << "int i4 = " << i4 << " (Example of Overflow)" << endl;
    cout << "char c1 = " << c1 << endl;
    cout << "char c2 = " << c2 << endl;
    cout << "char c3 = " << c3 << endl;
    cout << "float f1 = " << f1 << endl;
    cout << "float f2 = " << f2 << endl;
    cout << "double d1 = " << d1 << endl;
    cout << "double d2 = " << d2 << endl;
    cout << "bool b1 = " << b1 << endl;
    cout << "bool b2 = " << b2 << endl;
    cout << "bool b3 = " << b3 << endl;
    cout << "bool b4 = " << b4 << endl;
    cout << "string s1 = " << s1 << endl;
    cout << "string s2 = " << s2 << endl;

    /**
     * REFERENCE:
     *   For more details of C++ Data Types
     *   https://www.tutorialspoint.com/cplusplus/cpp_data_types.htm
     */
    
    return 0;
}
