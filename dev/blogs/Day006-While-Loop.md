# CodeNewb2Pro: Day006, While Loop



While the exam period still very far from now, as a college student, we often chilling and enjoying our time being a student. Doing part-time job, hangin out, or just simply spending the whole day at dormitory. Loop through all these till few weeks from the exams and start to work hard again lollll. We can describe the cycle using while loop!



------



### While Loop

So, when the exam period come then we need to study. Here, `Exam Period` is a `boolean` value or expression, when it's `True` then we study otherwise hangin out and have fun!

```
While (Exam Period) Then...
	Study
```



### Do… While Loop

Notice that in the above example we will first check the condition `Exam Period` before `Study`. How about we want to always `Study` for once first before checking the condition?

Wellll, we have Do… While Loop for this special case! Every time we will `Study` once then checking the condition, if the condition `Exam Period` hold then keep studying!

```
Do...
	Study
While (Exam Period)...
```



### Infinite Loop

In the above two example, either the condition satisfied, and thus keep studying, or the condition unsatisfied, and study once or none. Infinite loop will occur if the condition satisfied forever , which means keep studying! Which is not good… At some point we need to take a break!

```
While (Exam Period) Then...
	Study
	If (Study for 2 hours) Then...
		Take short break
		Continue...
	If (Done revision) Then...
		Break...
```

So if we study straight for 2 hours then we should have a short break and then `Continue` the loop of studying. Also, if we are done with revision then we take a pause and `Break` from the studying loop.

`Continue`, will resume the loop and execute the first statement in the while loop body, here we have Study as the first statement.

`Break`, will stop the loop and exit the loop immediately.



### C++ Sample Code

Code: https://gist.github.com/billy1624/5a47248eda75d84c2fc56597f6463b29

Sample Output:

![image-20190601175618208](./Day006, While Loop.assets/image-20190601175618208.png)



### Java Sample Code

Code: https://gist.github.com/billy1624/4ae6d3c561224df0646cb8685efba640

Sample Output:

![image-20190601175650679](./Day006, While Loop.assets/image-20190601175650679.png)



------



*<u>Next Post: Day007</u>*



More post coming soon~ Follow and stay tuned.
See u in the next post! Happy Coding!!
Feel free to ask me any questions down below, comments, corrections & suggestions are welcomed!



Billy :)  
2019.06.01



——   
GitHub: <https://github.com/billy1624>

