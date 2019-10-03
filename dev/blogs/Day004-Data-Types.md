# CodeNewb2Pro: Day004, Data Types



Why bother to deal with multiple data types? Why not just treat all data as the same type? Oh, by the way what is data type?



### Why Multiple Data Types?

Different real life data should be categorized according to their usage and categoristics. For example, a number “123” can be an `Integer` (number without decimal places) or a `String` (text or set of characters). 

But which data type is more suitable? If we want to calculate the number in our program, maybe it is a price of some product, then we should use `Integer`, as `Integer` data can be used in math calculation but not for `String` data. However, if the number is not for calculation, like Student ID or Credit Card Number, then there is not point to store the number as `Integer` and in this case we should treat it as `String`. 

Another reason of having multiple data types is the differences of characteristics across data type. For example, `Integer` and `Decimal` both represent numeric data. But only `Decimal` can contain decimal points.



----



### Data Types in General

Almost all programming language have 4 main kind of primitive data types, and all other data types are considered as non-primitive data types.



#### Primitive Data Types

There are 4 main kind of it:

1.  `Integer`: numeric value **without** decimal place
2.  `Decimal`: numeric value **with/ without** decimal place
3.  `Character`: single character, like "A" or "b"
4.  `Boolean`: binary value, **only** True (usually represented by 1) or False (usually represented by 0)



#### Non-Primitive Data Types

All data types other than primitive data types are non-primitive data types.

For example:

1.  `Object`
2.  `Array`
3.  ...

`Object`: Is a data type that serve a specific purpose, and each `Object` is created by its blueprint called `Class`. We will have an in depth discussion in later post on `Object` & `Class`. For now, we just need to concern how we gonna use the `Object`. Actually, we have overcome an `Object`, that is `String`. We simply don't care how `String` itself store the data. We as the user just put the text inside `String` and it will do the trick for us, as simple as that, for now.

`Array`: Is a set of data with the same data type. For example, a set of Student ID attaining the same course.



----



Let's try and see the data types in programming languages. Feel free to copy & paste onto your local machine and do some experiments yourself!



### C++ Data Types

```c++
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

```

Sample Output:

![image-20190131194318218](./Day004, Data Types.assets/image-20190131194318218.png)



----



### Java Data Types

```java
public class Day004 {
	public static void main(String[] args) {

        /** 
         * integer values
         * NOTE: zero is neither positive and negative, and so both signed & unsigned int can store zero
         * RANGE: 
         *    byte: -2^7 to (2^7)-1
         *   short: -2^15 to (2^15)-1
         *     int: -2^31 to (2^31)-1
         */
        byte b1 = -123;
        byte b2 = 123;
        byte b3 = -128;  // Underflow after substracting 1 from it
        b3 -= 1;  // Subtract 'b3' by 1 then put the value back to 'b3'
        byte b4 = 127;  // Overflow after adding 1 to it
        b4 += 1;  // Add 'b4' by 1 then put the value back to 'b4'
        short s1 = -123;
        short s2 = 123;
        int i1 = -123;
        int i2 = 123;
        

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
         *   For float, put "f" behind the value indicating it's a float value, otherwise all decimal value in Java treated as double value
         */
        float f1 = 123.002f;
        float f2 = -123.002f;
        double d1 = 123.002;
        double d2 = -123.002;

        /**
         * Boolean Value
         * either true or false
         */
        boolean bo1 = true;  // Printed as true
        boolean bo2 = false;  // Printed as false

        /**
         * String
         */
        String st1 = "CodeNewb2Pro: Day 004, Data Types";
        String st2 = "========= Happy Coding! =========";

        /** 
         * Print out all the values
         */
        System.out.println("byte b1 = " + b1);
        System.out.println("byte b2 = " + b2);
        System.out.println("byte b3 = " + b3 + " (Example of Underflow)");
        System.out.println("byte b4 = " + b4 + " (Example of Overflow)");
        System.out.println("int s1 = " + s1);
        System.out.println("int s2 = " + s2);
        System.out.println("int i1 = " + i1);
        System.out.println("int i2 = " + i2);
        System.out.println("char c1 = " + c1);
        System.out.println("char c2 = " + c2);
        System.out.println("char c3 = " + c3);
        System.out.println("float f1 = " + f1);
        System.out.println("float f2 = " + f2);
        System.out.println("double d1 = " + d1);
        System.out.println("double d2 = " + d2);
        System.out.println("bool bo1 = " + bo1);
        System.out.println("bool bo2 = " + bo2);
        System.out.println("string st1 = " + st1);
        System.out.println("string st2 = " + st2);

        /**
         * REFERENCE:
         *   For more details of Java Data Types
         *   https://www.geeksforgeeks.org/data-types-in-java/
         */
	}
}

```

Sample Output:

![image-20190131194411642](./Day004, Data Types.assets/image-20190131194411642.png)



----



**<u>Next Post: Day005</u>**



More post coming soon~ Follow and stay tuned.
See u in the next post! Happy Coding!!
Feel free to ask me any questions down below, comments, corrections & suggestions are welcomed!



Billy :)  
2019.01.31



——   
GitHub: <https://github.com/billy1624>