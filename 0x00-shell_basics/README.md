## 0x00. Shell, basics

![Holberton_logo](https://i.imgur.com/1HeldQT.png)

### OBJECTIVES
Learn about:
* [] - The Shell
* [] - Navigation
* [] - Manipulating files
* [] - Reading man pages 

#### AUTHOR:

*Spencer Cheng* - [Github](https://github.com/spencerhcheng) || [Twitter](https://twitter.com/spencerhcheng) || [email](spencer.cheng@gmail.com)

### FILE AND ENVIRONMENT SETUP
All files are written and compiles on Ubuntu 14.04 LTS. The first line of script files begins with exactly `#!/bin/bash`

All files will have executable priviledge for users.

#### 0. Where am I?
A script that prints the absolute path name of the current working directory.

```
$ ./0-current_working_directory
/Users/holbertonschool/holbertonschool-sysadmin_devops/0x00-shell_basics
$
```

#### 1. What's in there?
Displays the contents list of your current directory.

```
$ ./1-listit
Applications    Documents   Dropbox Movies Pictures
Desktop Downloads   Library Music Public
$
```

#### 2. There is no place like home
Script that changes the working directory to the user's home directory.
```
/tmp
$ echo $HOME
/home/spencer
$ source ./2-bring_me_home
$ pwd
/home/spencer
$
```

#### 3. The long format
Displays the current directory contents in long format.
```
$ ./3-listfiles
total 32
-rwxr-xr-x@ 1 spencer 18 Jan 25 00:19 0-current_working_directory
-rwxr-xr-x@ 1 spencer 19 Jan 25 00:23 1-listit
-rwxr-xr-x@ 1 spencer 18 Jan 25 00:29 2-bring_me_home
-rwxr-xr-x@ 1 spencer 18 Jan 25 00:39 3-listfiles
$
```

#### 4. Hidden files
Displays current directory contents, including hidden files (starting with `.` ), using the long format.

```
$ ./4-listmorefiles
total 32
drwxr-xr-x@ 6 204 Jan 25 00:29 .
drwxr-xr-x@ 43 1462 Jan 25 00:19 ..
-rwxr-xr-x@ 1 18 Jan 25 00:19 0-current_working_directory
-rwxr-xr-x@ 1 19 Jan 25 00:23 1-listit
-rwxr-xr-x@ 1 18 Jan 25 00:29 2-bring_me_home
-rwxr-xr-x@ 1 18 Jan 25 00:39 3-listfiles
-rwxr-xr-x@ 1 18 Jan 25 00:41 4-listmorefiles
$
```

#### 5. I love numbers
Displays current directory contents with user and group IDs displayed numerically.
```
$ ./5-listfilesdigitonly
total 32
drwxr-xr-x@ 6 501 20 204 Jan 25 00:29 .
drwxr-xr-x@ 43 501 20 1462 Jan 25 00:19 ..
-rwxr-xr-x@ 1 501 20 18 Jan 25 00:19 0-current_working_directory
-rwxr-xr-x@ 1 501 20 18 Jan 25 00:23 1-listfiles
-rwxr-xr-x@ 1 501 20 19 Jan 25 00:29 2-bring_me_home
-rwxr-xr-x@ 1 501 20 20 Jan 25 00:39 3-listfiles
-rwxr-xr-x@ 1 501 20 18 Jan 25 00:41 4-listmorefiles
-rwxr-xr-x@ 1 501 20 18 Jan 25 00:43 5-listfilesdigitonly
$
```

#### 6. Welcome Holberton
Script that creates a directory named `holberton` in the `/tmp/` directory.

```
$ ./6-firstdirectory
$ file /tmp/holberton/
/tmp/holberton/: directory
$
```

#### 7. Betty in Holberton
Move the file betty from `/tmp/` to `/tmp/holberton`.

```
$ ./7-movethatfile
$ ls /tmp/holberton/
betty
$
```

#### 8. Bye bye Betty
Delete the file `betty` in the `/tmp/holberton` directory.

```
$ ./8-firstdelete
$ ls /tmp/holberton/
$
```

#### 9. Bye bye Holberton
Delete the directory `holberton` in the `/tmp` directory.
```
$ ./8-firstdelete
$ ls /tmp/holberton/
$
```

#### 10. Back to the future
Script that changes the working directory to the previous one.
```
@ubuntu:/tmp$ pwd
/tmp
@ubuntu:/tmp$ cd /var
@ubuntu:/var$ pwd
/var
@ubuntu:/var$ source ./10-back
/tmp
@ubuntu:/tmp$ pwd
/tmp
```

#### 11. Lists
Script that lists all files (even ones with names beginning with a period character, which are normally hidden) in the current directory and the parent of the working directory and the /boot directory (in this order), in long format.

#### 12. File type
Script that prints the type of the file named iamafile. The file iamafile will be in the /tmp directory when we will run your script.

#### 13. We are symbols, and inhabit symbols
Create a symbolic link to /bin/ls, named __ls__. The symbolic link should be created in the current working directory.
```
ubuntu@ip-172-31-63-244:/tmp/sym$ ls -la
total 144
drwxrwxr-x  2 ubuntu ubuntu   4096 Sep 20 03:24 .
drwxrwxrwt 12 root   root   139264 Sep 20 03:24 ..
ubuntu@ip-172-31-63-244:/tmp/sym$./13-symbolic_link
ubuntu@ip-172-31-63-244:/tmp/sym$ ls -la
total 144
drwxrwxr-x  2 ubuntu ubuntu   4096 Sep 20 03:24 .
drwxrwxrwt 12 root   root   139264 Sep 20 03:24 ..
lrwxrwxrwx  1 ubuntu ubuntu      7 Sep 20 03:24 __ls__ -> /bin/ls
```

#### 14. Copy HTML Files

Script that copies all the HTML files from the current working directory to the parent of the working directory, but only copy files that did not exist in the parent of the working directory or were newer than the versions in the parent of the working directory.

#### 15. Let's move
Script that moves all files beginning with an uppercase letter to the directory /tmp/u.

```
ubuntu@ip-172-31-63-244:/tmp/sym$ ls -la
total 148
drwxrwxr-x  3 ubuntu ubuntu   4096 Sep 20 03:33 .
drwxrwxrwt 12 root   root   139264 Sep 20 03:26 ..
-rw-rw-r--  1 ubuntu ubuntu      0 Sep 20 03:32 Holberton
lrwxrwxrwx  1 ubuntu ubuntu      7 Sep 20 03:24 __ls__ -> /bin/ls
-rw-rw-r--  1 ubuntu ubuntu      0 Sep 20 03:32 Notrebloh
-rw-rw-r--  1 ubuntu ubuntu      0 Sep 20 03:32 random_file
ubuntu@ip-172-31-63-244:/tmp/sym$ ls -la /tmp/u
total 8
drwxrwxr-x 2 ubuntu ubuntu 4096 Sep 20 03:33 .
drwxrwxr-x 3 ubuntu ubuntu 4096 Sep 20 03:33 ..
ubuntu@ip-172-31-63-244:/tmp/sym$ ./15-lets_move
ubuntu@ip-172-31-63-244:/tmp/sym$ ls -la
total 148
drwxrwxr-x  3 ubuntu ubuntu   4096 Sep 20 03:33 .
drwxrwxrwt 12 root   root   139264 Sep 20 03:26 ..
lrwxrwxrwx  1 ubuntu ubuntu      7 Sep 20 03:24 __ls__ -> /bin/ls
-rw-rw-r--  1 ubuntu ubuntu      0 Sep 20 03:32 random_file
ubuntu@ip-172-31-63-244:/tmp/sym$ ls -la /tmp/u
total 8
drwxrwxr-x 2 ubuntu ubuntu 4096 Sep 20 03:33 .
drwxrwxr-x 3 ubuntu ubuntu 4096 Sep 20 03:33 ..
-rw-rw-r-- 1 ubuntu ubuntu    0 Sep 20 03:32 Holberton
-rw-rw-r-- 1 ubuntu ubuntu    0 Sep 20 03:32 Notrebloh
```

#### 16. Clean Emacs
Script that deletes all files in the current working directory that end with the character ~.

```
ubuntu@ip-172-31-63-244:/tmp/sym$ ls
main.c  main.c~  Makefile~
ubuntu@ip-172-31-63-244:/tmp/sym$ ./16-clean_emacs
ubuntu@ip-172-31-63-244:/tmp/emacs$ ls
main.c
ubuntu@ip-172-31-63-244:/tmp/emacs$
```

#### 17. Tree
Script that creates the directories welcome/, welcome/to/ and welcome/to/holberton in the current directory.

You are only allowed to use two spaces in your script, not more.

```
@ubuntu:/tmp/h$ ls -l
total 4
-rwxrw-r-- 1 julien julien 44 Sep 20 12:09 17-tree
@ubuntu:/tmp/h$ wc -l 17-tree 
2 17-tree
@ubuntu:/tmp/h$ head -1 17-tree 
#!/bin/bash
@ubuntu:/tmp/h$ tr -cd ' ' < 17-tree | wc -c # you do not have to understand this yet, but the result should be 2, 1 or 0
2
@ubuntu:/tmp/h$ ./17-tree 
@ubuntu:/tmp/h$ ls
17-tree  welcome
@ubuntu:/tmp/h$ ls welcome/
to
@ubuntu:/tmp/h$ ls -l welcome/to
total 4
drwxrwxr-x 2 julien julien 4096 Sep 20 12:11 holberton
@ubuntu:/tmp/h$ 
```
