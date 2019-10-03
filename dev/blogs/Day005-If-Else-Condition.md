# CodeNewb2Pro: Day005, If… Else… Condition



If else condition is simple to understand, right? If u are hungry then, u eat, otherwise don't bother to eat. However, we usually have more complex condition than that... And also some trick & tips for using if else condition.



------



### Boolean

Boolean value is either `True` or `False`, generally `True` means Yes, and `False` means No. For example, to represent whether you are hungry, we can use `True` representing empty stomach, and `False` representing full stomach.



### If...

By using the above Boolean value, we can make decision based on that.

Let say if you are hungry then, you will cook a cup noodles, we can write it in the following:

```
If (Hungry) Then...
    Cook cup noodles
```



### If... Else...

On top of If, we could have an alternative decision. Here we have If... Else... Condition

Continue with the above example, when the If Condition is `True`, that is we are hungry, then we cook the cup noodles (i.e. `True Portion`); Otherwise, If Condition is `False`, that is we have a full stomach, then we won't cook and watching movie on phone (i.e. `False Portion`).

Notice that either one action will be done, either the action on `True Portion ` or `False Portion` will be done.

We can represent it in the following way:

```
If (Hungry) Then...
    Cook cup noodles
Else...
    Watch movie on phone
```



### If... Else If... Else

The final variation of If Condition, the combination of If Condition and If Else Condition.

If... Else If... Else Condition is a series of ordered If Condition and end with an Else.

Still... Adding on top of above, after we decided to cook or not, we also want to drink lemon tea if we are thirsty.

Furthermore, I will get nervous if my phone is low on battery, so I will recharge it when low.

Notice that only one portion of the consecutive If Condition will take action.

Representing the statements in the following:

```
If (Hungry) Then...
    Cook cup noodles
If (Thirsty) Then...
    Drink lemon tea
If (Phone Low Battery) Then...
    Recharge the phone
Else...
    Watch movie on phone
```



### Boolean Operator

We can make decision based on combining multiple Boolean values by `Boolean Operator`.

`Boolean Operator` is operator for Boolean value, including `AND`, `OR`, `NOT`, these three are the basic operators.

When we have Boolean value A & Boolean value B, combining the two Boolean value by the operators...

-   A `AND` B: Resulting  `True` when both A & B are True; Otherwise, when either A or B is True, or none of them is True will resulting  `False`
-   A `OR` B: Resulting `True` when both A & B are True, or either A or B is True; Otherwise, when none of them is True will resulting `False`
-    `NOT`A: Special operator that unlike `AND` / `OR` that take two operand, `Not` only take one operand. It simply reverse the Boolean value of A, resulting `True` when A originally is False; Resulting `False` when A originally is True



### Boolean Expression

Boolean expression is a statement that combining multiple Boolean values by `Boolean Operator`, which after evaluation will become a Boolean value.

For example, If I'm hungry `AND` thirsty I will eat congee. Representing in the following:

```
If (Hungry AND Thirsty) Then...
    Eat congee
If (Hungry) Then...
    Cook cup noodles
If (Thirsty) Then...
    Drink lemon tea
If (Phone Low Battery) Then...
    Recharge the phone
Else...
    Watch movie on phone
```



### Order of If Condition

Notice that the order of If Condition is important, in the below example, even the Boolean value of both Hungry & Thirsty are `True`, I will never have a chance to eat congee. Because `If (Hungry) Then...` & `If (Hungry) Then...` placed ahead of `If (Hungry AND Thirsty) Then...`.

```
If (Hungry) Then...
    Cook cup noodles
If (Thirsty) Then...
    Drink lemon tea
If (Hungry AND Thirsty) Then...
    Eat congee
If (Phone Low Battery) Then...
    Recharge the phone
Else...
    Watch movie on phone
```



### C++ Sample Code

https://gist.github.com/billy1624/65f6c3d340405e5196e9a3e12ac0b1b3

Sample Output:

![image-20190210010854934](./Day005, If… Else… Condition.assets/image-20190210010854934.png)



### Java Sample Code

https://gist.github.com/billy1624/4e51f1d00cb00b530581367c14ed6c61

Sample Output:

![image-20190210010911706](./Day005, If… Else… Condition.assets/image-20190210010911706.png)



------



**<u>Next Post: Day006</u>**



More post coming soon~ Follow and stay tuned.
See u in the next post! Happy Coding!!
Feel free to ask me any questions down below, comments, corrections & suggestions are welcomed!



Billy :)  
2019.02.10



——   
GitHub: <https://github.com/billy1624>

