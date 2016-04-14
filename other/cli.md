## Terminal/Command Prompt

Node is a tool that we use from the command line. As such, being able to effectively use the command line will be an essential skill. Both the terminal and command prompt are command line interfaces (CLI). Macs use the Terminal and PCs use the Command Prompt. use Open your CLI.

```
#terminal
~ $
```

```
#command prompt
C:\>
```

Your CLI may or may not look exactly like this. Since I'm working on a mac, you'll see me navigate the Terminal using Mac-specific commands. If you are working on a PC, follow along with the corresponding PC-specifc commands below. Everything before the `$` (for Macs) is the current directory. CLIs typically start at the root directory. After the prompt symbol, you can type in commands.

Commands typically operate in the current directory. For example, the `ls` command for Macs/`dir` command for Windows list all the files in the current directory. The output of this command will be different depending on which directory you are in. Learning how to navigate between directories is a vital for using your CLI effectively.

#### MAC Commands
* `ls` - lists all the files in the current directory
* `pwd` - returns the present working directory
* `cd [path]` - changes the current directory to the directory specified by the `path` argument

#### PC Commands
* `dir` - lists all the files in the current directory
* `cd` - returns the present working directory
* `cd [path]` - changes the current directory to the directory specified by the `path` argument

So if I want to navigate from my root directory to my desktop using a Mac:

```
~ $ pwd
/Users/myUsername
~ $ ls
Applications			Desktop				
Documents			   Downloads			
Library			 	Movies				
Music				   Pictures
~ $ cd Desktop
Desktop $		
```

Notice, after we navigated to the desktop, the current path changed to reflect that. Test this out on your CLI.

### Node

Let's run some code. We will write a very simple program that will print the text `"Hello World"` onto the screen. There are two ways we can do this. I can write the program directly in the Node REPL or I can write a file.

**1. Node REPL**

We can run our program in the Node REPL. To do this, please open up your CLI. Type `node` in the window that opens up and press `Enter`. This opens up the Node REPL (which stands for Read, Evaluate, Print Loop). Everything that we type into the CLI now will be evaluated and executed by the JavaScript interpreter. We can write and run any valid JavaScript code inside of the REPL. It’s particularly useful for testing short snippets of your code or built-in functions.

Ok enough talk, let’s try it. Type `console.log(“Hello, World!”);` into the Node REPL and hit `Enter`. You should see the text `"Hello World"` printed to the screen. If you don’t check to make sure you typed everything correctly. Are you missing quotes? Or a semicolon? Try again.

**2. JavaScript File**

We can also run our program by running it through a file. JavaScript files are denoted by the file extension “js”. Let’s create our first JavaScript file. Open up Atom or whatever IDE you prefer. Create a new file (File > New File) and save it as “helloWorld.js” on your Desktop. To double check that it has work, a new icon should appear on your Desktop named “helloWord.js”. Now in your new file, type `console.log(“Hello World!”);`. Save your file.

To run your file, open up your CLI if it’s not already open. If you have Node open, close it by typing Control + C twice or ".exit" into the command line. Navigate to your Desktop. Once there, type `node helloWord.js` into the command line. You should see the text Hello World printed to the screen.

Typing `node [filename.js]` runs the file specified after `node`. This means that the JavaScript interpreter will evaluate the code saved in the file. Running programs written and saved in files using Node is useful when you have to write long programs, edit them repeatedly, and save them for later.
