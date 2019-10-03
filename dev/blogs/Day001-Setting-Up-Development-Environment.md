# CodeNewb2Pro: Day001, Setting Up Development Environment



### Programming Language Used

In the series we will use mainly C++ and Java as the programming language. I will help u get the development environment ready in the following.



**C++: 1a) Installation (Windows)**

1.  Download and install Cygwin: <https://www.cygwin.com/> 
2.  Done! Try to compile and run a simple hello world program below.

**C++: 1b) Installation (Mac OS)**

1.  Open Terminal
2.  Type “g++” (without ”), and press Enter
3.  If u don’t have “g++” installed, a prompt will show up, select click install for installation
4.  Done! Try to compile and run a simple hello world program below.

**C++: 2) Simple Hello World Program**

```c++
#include <iostream>
using namespace std;

int main(int argc, char* argv[]) {
    cout << "Hello World" << endl;
    return 0;
}

```



1.  Copy & Paste the above code to a file and name the file “Day001.cpp” (notice we use capital “D” here for file name, later when we compile the file we will need to correctly type the capital “D” for the file name)
2.  Open Terminal (Mac OS) / Command Line (Windows) and go to the directory which you put the “Day001.cpp”. (Tips: use [“cd” command](https://www.google.com/search?q=cd+command) travel to the corresponding directory)
3.  Double check that you have the file on the current directory by using [“ls” command](https://www.google.com/search?q=ls+command). You should see the “Day001.cpp” on the current directory as shown below.
4.  Type “g++ Day001.cpp -o Day001.out” then press enter to compile the source code. You should not see any error message showing up. Finally type “./Day001.out” to run the hello world program you just compiled. The message “Hello World” should shown as below.
5.  If you got the above “Hello World” message showing, nice job!! You have the C++ compiler installed!

![img](Day001, Setting Up Development Environment.assets/k39qrPe6lOl0Hir0LzULBJUuCs4cQIDsFnCff9emq23jw1qNr-mLkYHUHeKvvLB6iI5QMuzcDEys0oFhcc3KEJcSGvxxnE_IDLYPYueo_05fjC6oAcvTnOtbe6B1kLt-5NrPIpwI-20190131165546412.png)



**Java: 1a) Installation (Windows)**

1.  Press [here](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) to download Java JDK 8u191
2.  Select radio button “Accept License Agreement”
3.  Then click to download “Windows x86” (32 bit Windows) or “Windows x64” (64 bit Windows) version of JDK
4.  Finally install the downloaded JDK, and try the simple hello world program below

**Java: 1b) Installation (Mac OS)**

1.  Press [here](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) to download Java JDK 8u191
2.  Select radio button “Accept License Agreement”
3.  Then click to download “Mac OS X x64” version of JDK
4.  Finally install the downloaded JDK, and try the simple hello world program below

**Java: 2) Simple Hello World Program**

```java
public class Day001 {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
 
```

1.  Copy & Paste the above code to a file and name the file “Day001.java” (notice we use capital “D” here for file name, later when we compile the file we will need to correctly type the capital “D” for the file name)Open Terminal (Mac OS) / Command Line (Windows) and go to the directory which you put the “Day001.java”. (Tips: use [“cd” command](https://www.google.com/search?q=cd+command) travel to the corresponding directory)
2.  Double check that you have the file on the current directory by using [“ls” command](https://www.google.com/search?q=ls+command). You should see the “Day001.java” on the current directory as shown below.
3.  Type “javac Day001.java” then press enter to compile the source code. You should not see any error message showing up. Finally type “java Day001” to run the hello world program you just compiled. The message “Hello World” should shown as below.
4.  If you got the above “Hello World” message showing, nice job!! You have the Java compiler installed!

![img](Day001, Setting Up Development Environment.assets/39hlhchZeoork1DJWQCB0SgaSIzmVx5DIMBDRhNpgP-Ec0CZv78gQEen89Npz-PokY8N1sx-QNbS5PljnLY-4JrImT0AaSTkcGxgqCDJ725ejDbwyvNyy7fogFezJZB4iyFKHEzI-20190131165546411.png)

Next, I will briefly talk about programming & coding. It won’t be long, it will be short and simple.
Next Post: Day002, Programming & Coding (Programming? Is it yummy?)



More post coming soon~ Follow and stay tuned.
See u in the next post! Happy Coding!!
Feel free to ask me any questions down below, comments, corrections & suggestions are welcomed!



Billy :)  
2019.01.01



——  
GitHub: <https://github.com/billy1624>