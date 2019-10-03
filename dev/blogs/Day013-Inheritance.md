# CodeNewb2Pro: Day013, Inheritance



All of us know half of the gene comes from mother, and the other half comes from father, that is the basic idea of inheritance. It should be the same in programming, right?



------



### What is Inheritance?

Inheritance means that a subclass (or child class) inherit attributes and methods from another class (often call this class as super class or parent class). Notice that the child class `is a` kind of parent class, for example Dog `is a ` Animal, Human `is a ` Animal. But why we bother to use inheritance in programming? Why not just make class like Dog, Human, Animal as three separate and unrelated class? Let discuss in the following.



### Why Inheritance?

-   Organize object in hierarchy: Inheritance was  `is a` relationship, a subclass `is a` kind of superclass. That means subclass is a more specific form of the superclass. 
-   Pass common attributes and methods to subclass: Subclass could inherit attributes and methods from superclass (depending on access specifier in superclass, see more for [C++](https://www.tutorialspoint.com/cplusplus/cpp_inheritance.htm) and [Java](https://www.tutorialspoint.com/java/java_inheritance.htm)) Taking the advantage of inheritance to avoid defining duplicate attributes and implementing same set of method again and again.
-   Making object type more generic: Imaging that you want to write a method that will take any Animal as parameter. However, without inheritance we might need to overload the function with multiple Animal data types, not to mention the growing number of Animal subclass in later stage. With the help of inheritance we could just simply use Animal as input type, and other more specific Animal class (i.e. Dog, Cat, Human…etc.) inherit from it, all done!



### When Inheritance?

-   Want to pass a generic type to function parameter: As discussed above! Also, there are other ways to handle this kind of generic programming, for example by using template, abstraction…etc.
-   More organized: Easier for others to understand the structure of the program!



###What to Avoid in Inheritance?

Outlier: For example a superclass Bird could have subclass like Eagle, Owl, even Chicken! However, what if I say Bird superclass have a method of Fly. But wait… Chicken nowadays don't know how to fly… It don't not make sense to include it in Bird class. What we could do in Java way is that flying Animal will implement a Flyable interface (see [here](https://www.tutorialspoint.com/java/java_interfaces.htm) for details). The Fly method is put inside Flyable interface, and hence Animal implement Flyable can fly!



### C++ Sample Code

Code: https://gist.github.com/billy1624/a5b789a823bf7f40d37878a1cc78a02b

Sample Output:

![image-20190623232548610](Day013, Inheritance.assets/image-20190623232548610.png)



### Java Sample Code

Code: https://gist.github.com/billy1624/436a1f5893946c9c39458e5b20cae590

Sample Output:

![image-20190623232612325](Day013, Inheritance.assets/image-20190623232612325.png)



------



*<u>Next Post: Day014</u>*



More post coming soon~ Follow and stay tuned.
See u in the next post! Happy Coding!!
Feel free to ask me any questions down below, comments, corrections & suggestions are welcomed!



Billy :)  
2019.06.27



——   
GitHub: <https://github.com/billy1624>

