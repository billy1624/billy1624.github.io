# CodeNewb2Pro: Day012, Debugging



Bug is annoying in real life, what's more annoying for programmer is that we spend lot of time dealing with bug in programming! Killing the evil and virtual bug reside in the program is sometime hard and costly.



------



### Killing Bug!

I believe most of you have the experience that piece of code you just type does not work as expected, however you have no idea why it failed.

Here are some tips for your debugging:

1.  Find the suspect: Try to run a few test case with the suspected block of defective code, and narrow down the scope of suspected code as much as possible
2.  See what it's doing: Use live debugging tool to see the line by line execution of the program, or simply print the value inside the variable
3.  All done: You should have identify the root of bug and fixed it

```
// demo_buggy.py
arr = [2,3,6,6,5]	// array of marks ranging from 0 to 100
winner = -101		// mark of winner
runner_up = -102	// mark of runner-up
for n in arr:
    if (n > winner):
        runner_up = winner
        winner = n
    elif (n > runner_up):
        runner_up = n
print(winner)		// Output: 6
print(runner_up)	// Output: 6
// Hmmmmmm wrong answer for runner up! Why?
```

The above Python code showing a simple program finding the marks of winner and runner-up in a competition.  The program has an array of marks `[2,3,6,6,5]` as input, and it found the winner and runner-up have the same score! However, that is not what we want… we want the second highest score as runner-up score.

So, what's wrong with our code? We can print the change in each if body, see below:

```
for n in arr:
    if (n > winner):
    	print('winner change from', winner, 'to', n)
        runner_up = winner
        winner = n
    elif (n > runner_up):
        print('runner-up change from', runner_up, 'to', n)
        runner_up = n
```

Then, we can quickly see the update of `runner_up` variable is not what we want!

```
// demo.py
arr = [2,3,6,6,5]	// array of marks ranging from 0 to 100
winner = -101		// mark of winner
runner_up = -102	// mark of runner-up
for n in arr:
    if (n > winner):
        runner_up = winner
        winner = n
    elif (n > runner_up and n < winner):
        runner_up = n
print(winner)		// Output: 6
print(runner_up)	// Output: 6
// Hmmmmmm wrong answer for runner up! Why?
```

And we change the second if condition to exclude `n == winner`, now the bug fixed.



### Avoiding Bug!

Unstructured and messy code is the breeding place of bug!

Where are these breeding place?

-   God function: function that contain all the code in one function, that means lots of logic inside one function!
-   God class: similar to god function, class that contain all the program logic in single class, not a good OOP design!
-   Nested statements: such as nested if or loop, try to flatten the nested structure as much as possible



### Learn From the Past!

Practice makes perfect! Don't afraid to make mistakes, the experience that you fix bugs will carry on to the future and to different programming language. However, different programming language might have different pitfalls for programmer! lollll Anyway, learn from the past and carry on!



------



*<u>Next Post: Day013</u>*



More post coming soon~ Follow and stay tuned.
See u in the next post! Happy Coding!!
Feel free to ask me any questions down below, comments, corrections & suggestions are welcomed!



Billy :)  
2019.06.23



——   
GitHub: <https://github.com/billy1624>

