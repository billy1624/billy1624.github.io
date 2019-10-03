# CodeNewb2Pro: Day010, Readable Code Without Documentation



To write readable code, comment and documentation are not the necessary component. How you structure the code is the core of readability. Meaning that how you format the code and do the naming will affect code readability!



------



### Code Formatting

Format your code according to the general formatting rule such as indenting code block by scope, one line one statement, etc. However, the best practice of code formatting vary across different programming language, you can find online by typing the name of your favorite programming language followed by "formatting best practice". Also, different organization might have different requirements on code formatting, so you better understand the convention before coding!

```
// Sample 1
if (Code Unformat) Then... Reformat Code

// Sample 2
if (Code Unformat) Then...
	Reformat Code
```

Even a small group of 2-3 programmer might have different convention! Assuming an if statement with only one line of code inside its body, then some programmer will simply put all in one line (Sample 1), or some will put it two line (Sample 2). For me I will write the code as Sample 2. So, one time I read my friend's code and I'm not used to the way my friend write the code as Sample 1, so for me it's quite hard to read.



### Naming of Variable, Function & Class

What programmer spend the most time on? Naming things!! We have many things to name, variables, functions and classes! Not to mention those intermediate variables!

```
Boolean success = True
If ( success ) Then...
	Party Time & Celebrate
```

Naming should be short and intuitive. Take the above as an example, that usually how I name boolean variable, using the meaning that boolean variable representing for naming. The benefit of it being intuitive if condition when using the variable in it.

Also, my convention of naming function is based on its functionality and with a name in verb form. And for class and boolean, its name is in noun form.

```
For (int i=0; i<10; i++)
```

In some cases, we might give variable a name that without any meaning (seems like). Like the counter variable in For Loop, we often give the name `i` or `j` to it. However, this is the convention of naming it, programmers are lazy lollll.



### Keep it Simple!

Simple is the best! Try to make things as simple as possible.

-   Avoid using multiple nested loop
-   Break long function into multiple simple functions
-   Extract common code across multiple function and put the common code into single utility function, then call to use the utility function

Following sample code does not have any comments in it, see if it's easy to understand or not!



### C++ Sample Code

Code: https://gist.github.com/billy1624/ac57881a66e0f1b846daf065da20fd57



### Java Sample Code

Code: https://gist.github.com/billy1624/b3f511ee6c9bc3c8be2c3e63314e063b



------



*<u>Next Post: Day011</u>*



More post coming soon~ Follow and stay tuned.
See u in the next post! Happy Coding!!
Feel free to ask me any questions down below, comments, corrections & suggestions are welcomed!



Billy :)  
2019.06.07



——   
GitHub: <https://github.com/billy1624>

