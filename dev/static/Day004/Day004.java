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
