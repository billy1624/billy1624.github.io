# CodeNewb2Pro: Day008, Object-Oriented



Every things in our daily life are object, each associated with some unique properties and actions. Such as a person has properties like name, age, date of birth, gender, skills, etc. And actions like run, sleep, read, speak, etc. But you may ask, how about object that will not move at all? Such as apple? For these static objects we will have properties for it but not actions. Apple could have properties of origin, weight, color, maturity, etc.



------



### Why Object-Oriented?

-   More intuitive and easy to understand, each object model the corresponding real-world object
-   Encourage collaboration, each developer implement a specific and well defined object; developers then combine the functionality provided by different object to build up the application
-   Promote simplicity and security! We will discuss in the following



### Encapsulation (Simplicity & Security)

Encapsulation means the user can use the functionality provided by an object without caring how the object does that for you. For example, when you use ATM, you just need to provide the ATM card and the pin, then you just commend the ATM to withdraw cash for you. For simplicity, the user don't need to know how the machine count notes and update bank account balance. And for the bank, because of security reason the user should not know how the ATM works.



### Class (Object Blueprint)

```
Class ATM:
	Property:
		boolean InService
		string Location
	Method:
		Withdraw(ATM Card, Pin)
		Deposit(ATM Card, Cash)
		CheckInService()
```

Each object is created from the blueprint called `Class`. For the example of ATM object we discuss above, we have model a simple ATM `Class`. It contains a boolean value `InService` indicating the ATM in service or not, also a `Withdraw` `Method` (action), which take ATM Card and Pin as input. The user will only see that to withdraw money the ATM requires ATM Card and Pin, user have no idea how the `Withdraw` method implemented!



### Object Creation

All objects are created by a class blueprint, each object have their own copy of `Property` but share same set of `Method`. Meaning that we can have two different ATM objects one located on A place and in service, another ATM object located on B place and out of service.



### Constructor (Object Initialization)

```
Class ATM:
	...
	Constructor:
		ATM(InService, Location)
        ATM()
	...
```

During object creation, the initial state of the object is set by the constructor. Shown in the above code, a class could have multiple constructor, but only one constructor will be involved.

`ATM(InService, Location)`, takes input of InService and Location, setting the input value to corresponding property.

`ATM()`, takes no input, it will set property to default value.

More explanation on below C++ and Java sample code.



### C++ Sample Code

Code: https://gist.github.com/billy1624/df7bda872b8ff75ca33a11025406243d

Sample Output:

![image-20190602234053781](Day008, Object-Oriented.assets/image-20190602234053781.png)



### Java Sample Code

Code: https://gist.github.com/billy1624/261a366b5d1bb0c25889afe358134591

Sample Output:

![image-20190602234130013](Day008, Object-Oriented.assets/image-20190602234130013.png)



------



*<u>Next Post: Day009</u>*



More post coming soon~ Follow and stay tuned.
See u in the next post! Happy Coding!!
Feel free to ask me any questions down below, comments, corrections & suggestions are welcomed!



Billy :)  
2019.06.02



——   
GitHub: <https://github.com/billy1624>

