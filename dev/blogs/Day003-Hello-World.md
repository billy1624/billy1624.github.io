# CodeNewb2Pro: Day003, Hello World



We write so many lines of code just to print a simple “Hello World”? And I don’t even know what is “int main(int argc, char* argv[]) {...}“.



### C++ Hello World Program

```c++
#include <iostream>
using namespace std;

int main(int argc, char* argv[]) {
    cout << "Hello World" << endl;
    return 0;
}

```

Line 1. “#include <iostream>”. This line include the C++ standard iostream library into this source file, you can imagine the content of iostream file replace the line. Basically we would need this iostream library to handle input & output in C++ program, like “cout” we used in the program to print our hello world text.

Line 2. “using namespace std;”. This line declared the use of “std” namespace in the following. That means we don’t need to write “std::cout << "Hello World" << std::endl;”, we can just simply write “cout”. Programmers are lazy lolll

Line 4. “int main(int argc, char* argv[]) {”. 

-   “int” state the return type of this main function, here we have integer return type. (in the next post we will discuss data type in details)
-   “main” is the function name. In each C++ program there is only one function called main, and this is the entry point of the whole program.
-   “int argc” means an integer variable called argc. This variable contain the number of argument passed on command line to launch the program.
-   “char* argv[]” contains an array of argument passed on command line to launch the program.
-   This is a good [stackoverflow](https://stackoverflow.com/questions/3024197/what-does-int-argc-char-argv-mean) for u to know more on “int argc, char* argv[]”.

Line 5. “cout << "Hello World" << endl;”. Simply print out “Hello World” text and with a line break. “endl” is a line break, just like in a text editor you will press enter to break a line. You can imagine the program will print “Hello World” then press enter after that.

Line 6. “return 0;”. The end of main function, we usually will return a integer “0”, indicating the program executed successfully and come to an end without any error.

Line 7. “}”. Emmmmmm… yea a symbol for closing the main function body, it’s paired with the open of function body the “{” sign.



### Java Hello World Program

```java
public class Day001 {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}

```

Line 1. “public class Day001 {”. Each Java program will have exactly one public class which contain the main function.

Line 2. “public static void main(String[] args) {”. This is the entry point of the Java program, which is a public static function without any return type. “String[] args” contains an array of arguments passed on command line when launching the program.

Line 3. “System.out.println("Hello World");”. Print the “Hello World” with a line break. There is another print method which print text without line break “System.out.print("Hello World");”, use “print” instead of “println”.

This is how the sample hello world program works. I didn’t explain every details of both C++ & Java implementation. Because fundamentally the design and structure of both programming language are different, so I rather discuss the in-depth concept in separate post later, and keep this post short & simple :D



Next, we will discuss data types in general and in both C++ & Java language!  
Next Post: Day004, Data Types



More post coming soon~ Follow and stay tuned.
See u in the next post! Happy Coding!!
Feel free to ask me any questions down below, comments, corrections & suggestions are welcomed!



Billy :)  
2019.01.15



——  
GitHub: <https://github.com/billy1624>