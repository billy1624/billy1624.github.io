# CodeNewb2Pro: Day007, For Loop



Hey, can you fold the star like origami for around 100 copies, filling the whole bottle with paper stars for me? Yeah… sure! It sounds repetitive, I could write a program and fold that for you! 



------



### For Loop

```
For (Initial, Condition, Update)...
	Body
```

A regular For Loop mainly consist of 4 parts:

-   `Initial`: The initialization of variable that will be used in the for loop (mostly integer counter variable counting from 0 up to some point), executed once at the time of entering the loop
-   `Condition`: The condition that need to be satisfied in order to enter the loop `Body` after execution of `Initial` or `Update`
-   `Update`: The update statement that mostly update the value in loop variable
-   `Body`: The for loop body containing all statements that will be loop iteratively



### Simple Example

```
For (i=1, i<=100, i=i+1)...
	Fold star origami
```

Back to the case of folding 100 star origami. Inside the `Body` we fold one star origami each time. Setting `Initial` of integer variable i=1. `Condition` of i less than or equal to 100. Every time we finished folding the star origami (inside `Body`) we `Update` the variable i by adding 1 to it, making i counting from `Initially` 1 all the way to 100. Finally  after folding the 100th star, the value of i will become 101 and not satisfied the `Condition`, making the for loop end.



### For Each Loop (Range-based For Loop)

```
For (i : Array arr)...
	print value of i
```

Here we see a special kind of for loop, which many modern programming language has it. The simple use of this For Each Loop is to loop through all elements in an array. The `arr` array contain many integer number, then by the statement above each time we put single value inside variable `i` and do this for every elements in the array. We will see the actual implementation of for each loop in the following sample code.



### C++ Sample Code

Code: https://gist.github.com/billy1624/bfaad22ee1918a314bdb1e9015b21784

Sample Output:

![image-20190601234210098](./Day007, For Loop.assets/image-20190601234210098.png)



### Java Sample Code

Code: https://gist.github.com/billy1624/43675459fb13d1cf37390497ce983ddc

Sample Output:

![image-20190601234236131](./Day007, For Loop.assets/image-20190601234236131.png)



------



*<u>Next Post: Day008</u>*



More post coming soon~ Follow and stay tuned.
See u in the next post! Happy Coding!!
Feel free to ask me any questions down below, comments, corrections & suggestions are welcomed!



Billy :)  
2019.06.01



——   
GitHub: <https://github.com/billy1624>

