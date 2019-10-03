# CodeNewb2Pro: Day011, Pro Tips on Multi-Line Select & Edit



![banner](Day011, Pro Tips on Multi-Line Select & Edit.assets/banner.gif)



Have you ever try to modify some code repeatedly or even use find & replace all function? Here I introduce you multi-line select & edit function! A safe and efficient way to edit multiple occurrence at the same time.



------



### Why Not Find & Replace All?

First, it is dangerous to use find & replace without any source control (e.g. Git). Also, I think it's difficult to track where it replace, especially for some editor that does not shown replace locations.

I'm not saying avoid using it, but use it with caution, commit your code to source control before directory-wide find & replace all. So that you have a save point and you could view what it replace in source control change log.



### IDE or Text Editor Support

Now comes to manual multi-line select & edit, it requires IDE or text editor support. Most modern editors have this feature built-in, otherwise you can find online for such extension. For example, Sublime Text and VS Code have such feature built-in.



### How to Multi-Line Select & Edit?

Three step process to complete the act:

1.  What you want to change? (from what to what?)
2.  Identify a unique keyword or pattern to select (can be a keyword or indentation or even line break!)
3.  Make the changes!
4.  Done!!

![C Print to Java Print](Day011, Pro Tips on Multi-Line Select & Edit.assets/C Print to Java Print.gif)

To illustrate the process, I will tell you how to change all print statement in C++ syntax to Java syntax:

1.  Select `cout << ` and change it to `System.out.println(`, then press `Command + Right Arrow`(MacOS)/ `Control + Right Arrow`(Windows) go the end of line, adding `)` before `;`.
2.  Select `<< endl` and remove it, as `System.out.println()` already have line break
3.  Select `<<` and change it to `+`
4.  Done!!



### What It Uses for?

-   Changing variable name, but might not applicable for short variable name e.g. `i`
-   Changing function name
-   Convert class fields to class constructor, demo below
-   Many other use cases!! Be creative!



![use case demo](Day011, Pro Tips on Multi-Line Select & Edit.assets/use case demo.gif)



In the above demo I forgot to remove the `,` sign before `int pint`. Opppppsy…



------



*<u>Next Post: Day012</u>*



More post coming soon~ Follow and stay tuned.
See u in the next post! Happy Coding!!
Feel free to ask me any questions down below, comments, corrections & suggestions are welcomed!



Billy :)  
2019.06.11



——   
GitHub: <https://github.com/billy1624>

