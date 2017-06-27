## 0x01. Shell, permissions

![Holberton_logo](https://i.imgur.com/1HeldQT.png)

### OBJECTIVES
* [] - How to create a user
* [] - How to create a group
* [] - How to print real and effective user and group IDs
* [] - How to print the effective userid

#### AUTHOR:

*Spencer Cheng* - [Github](https://github.com/spencerhcheng) || [Twitter](https://twitter.com/spencerhcheng) || [email](spencer.cheng@gmail.com)

### FILE AND ENVIRONMENT SETUP
All files are written and compiles on Ubuntu 14.04 LTS. The first line of script files begins with exactly `#!/bin/bash`

All files will have executable priviledge for users.

#### 0. My name is Betty mandatory

Create a script that changes your user ID to betty.

Assume that the user betty will exist when we will run your script
@ubuntu:/tmp/h$ tail -1 0-iam_betty | wc -c
9
@ubuntu:/tmp/h$

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 0-iam_betty

#### 1. Who am I mandatory

Write a script that prints the effective userid of the current user.

```
spencer@ubuntu:/tmp/h$ ./1-who_am_i
spencer
spencer@ubuntu:/tmp/h$ 
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 1-who_am_i

#### 2. Empty! mandatory

Write a script that creates an empty file called hello.

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 4-empty

#### 3. Groups mandatory

Script that prints all the groups the current user is part of.

@ubuntu:/tmp/h$ ./2-groups
adm cdrom sudo dip plugdev lpadmin sambashare
@ubuntu:/tmp/h$ 

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 2-groups

#### 4. New owner mandatory

Script that changes the owner of the file hello to the user betty.

```
@ubuntu:/tmp/h$ ls -l
total 4
-rwxrw-r-- 1 30 Sep 20 14:23 3-new_owner
-rw-rw-r-- 1 0 Sep 20 14:18 hello
@ubuntu:/tmp/h$ sudo ./3-new_owner 
@ubuntu:/tmp/h$ ls -l
total 4
-rwxrw-r-- 1 spencer spencer 30 Sep 20 14:23 3-new_owner
-rw-rw-r-- 1 betty  spencer 0 Sep 20 14:18 hello
@ubuntu:/tmp/h$
```
GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 3-new_owner

#### 5. Execute mandatory

Script that adds execute permission to the owner of the file hello.

The file hello will be in the working directory
```
@ubuntu:/tmp/h$ ls -l
total 8
-rwxrw-r-- 1 Sep 20 14:26 5-execute
-rw-rw-r-- 1 23 Sep 20 14:25 hello
@ubuntu:/tmp/h$ ./hello
bash: ./hello: Permission denied
@ubuntu:/tmp/h$ ./5-execute 
@ubuntu:/tmp/h$ ls -l
total 8
-rwxrw-r-- 1 28 Sep 20 14:26 5-execute
-rwxrw-r-- 1 23 Sep 20 14:25 hello
@ubuntu:/tmp/h$ 
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 5-execute

#### 6. Multiple permissions mandatory

Script that adds execute permission to the owner and the group owner, and read permission to other users, to the file hello.

The file hello will be in the working directory

```
spencer@ubuntu:/tmp/h$ ls -l
total 8
-rwxrw-r-- 1 spencer 36 Sep 20 14:31 6-multiple_permissions
-r--r----- 1 spencer 23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$ ./6-multiple_permissions 
spencer@ubuntu:/tmp/h$ ls -l
total 8
-rwxrw-r-- 1 spencer 36 Sep 20 14:31 6-multiple_permissions
-r-xr-xr-- 1 spencer 23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$
```
 
GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 6-multiple_permissions

#### 7. Everybody! mandatory

Script that adds execution permission to the owner, the group owner and the other users, to the file hello

The file hello will be in the working directory
```
spencer@ubuntu:/tmp/h$ ls -l
total 8
-rwxrw-r-- 1 julien julien 28 Sep 20 14:35 7-everybody
-rw-r----- 1 julien julien 23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$ ./7-everybody 
spencer @ubuntu:/tmp/h$ ls -l
total 8
-rwxrw-r-- 1 spencer 28 Sep 20 14:35 7-everybody
-rwxr-x--x 1 spencer 23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$ 
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 7-everybody

#### 8. James Bond mandatory

Script that sets the permission to the file hello as follows:

Owner: no permission at all
Group: no permission at all
Other users: all the permissions
The file hello will be in the working directory.

```
spencer@ubuntu:/tmp/h$ ls -l
total 8
-rwxrw-r-- 1 spencer28 Sep 20 14:40 8-James_Bond
-rwxr-x--x 1 spencer 23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$ ./8-James_Bond 
spencerubuntu:/tmp/h$ ls -l
total 8
-rwxrw-r-- 1 spencer 28 Sep 20 14:40 8-James_Bond
-------rwx 1 spencer 23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$ 
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 8-James_Bond

#### 9. John Doe mandatory

Script that sets the mode of the file hello to this:

-rwxr-x-wx 1 spencer 23 Sep 20 14:25 hello
The file hello will be in the working directory

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 9-John_Doe

#### 10. Look in the mirror mandatory

Script that sets the mode of the file hello the same as olleh’s mode.

The file hello will be in the working directory
The file olleh will be in the working directory

```
spencer@ubuntu:/tmp/h$ ls -l
total 8
-rwxrw-r-- 1 spencer 42 Sep 20 14:45 10-mirror_permissions
-rwxr-x-wx 1 spencer 23 Sep 20 14:25 hello
-rw-rw-r-- 1 spencer 0 Sep 20 14:43 olleh
spencer@ubuntu:/tmp/h$ ./10-mirror_permissions 
spencer @ubuntu:/tmp/h$ ls -l
total 8
-rwxrw-r-- 1 spencer 42 Sep 20 14:45 10-mirror_permissions
-rw-rw-r-- 1 spencer 23 Sep 20 14:25 hello
-rw-rw-r-- 1 spencer 0 Sep 20 14:43 olleh
spencer@ubuntu:/tmp/h$ 
Note: the mode of olleh will not always be 664. Make sure your script works for any mode.
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 10-mirror_permissions

#### 11. Directories mandatory

Script that adds execute permission to all subdirectories of the current directory for the owner, the group owner and all other users. Regular files should not be changed.

```
spencer@ubuntu:/tmp/h$ ls -l
total 20
-rwxrwxr-x 1 spencer 24 Sep 20 14:53 11-directories_permissions
drwx------ 2 spencer 4096 Sep 20 14:49 dir0
drwx------ 2 spencer 4096 Sep 20 14:49 dir1
drwx------ 2 spencer 4096 Sep 20 14:49 dir2
-rw-rw-r-- 1 spencer 23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$ ./11-directories_permissions 
spencer@ubuntu:/tmp/h$ ls -l
total 20
-rwxrwxr-x 1 spencer24 Sep 20 14:53 11-directories_permissions
drwx--x--x 2 spencer 4096 Sep 20 14:49 dir0
drwx--x--x 2 spencer 4096 Sep 20 14:49 dir1
drwx--x--x 2 spencer 4096 Sep 20 14:49 dir2
-rw-rw-r-- 1 spencer 23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$ 
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 11-directories_permissions

#### 12. More directories mandatory

Script that creates a directory called dir_holberton with permissions 751 in the working directory.

```
spencer@ubuntu:/tmp/h$ ls -l
total 20
-rwxrwxr-x 1 spencer 39 Sep 20 14:59 12-directory_permissions
drwx--x--x 2 spencer 4096 Sep 20 14:49 dir0
drwx--x--x 2 spencer096 Sep 20 14:49 dir1
drwx--x--x 2 spencer4096 Sep 20 14:49 dir2
-rw-rw-r-- 1 spencer 23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$ ./12-directory_permission s
spencer@ubuntu:/tmp/h$ ls -l
total 24
-rwxrwxr-x 1 39 Sep 20 14:59 12-directory_permissions
drwx--x--x 2 spencer 096 Sep 20 14:49 dir0
drwx--x--x 2 spencer 4096 Sep 20 14:49 dir1
drwx--x--x 2 spencer 4096 Sep 20 14:49 dir2
drwxr-x--x 2 spencer 4096 Sep 20 14:59 dir_holberton
-rw-rw-r-- 1 23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$ 
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 12-directory_permissions

#### 13. Change group mandatory

Write a script that changes the group owner to holberton for the file hello

The file hello will be in the working directory
```
spencer@ubuntu:/tmp/h$ ls -l
total 24
-rwxrwxr-x 1 spencer 4 Sep 20 15:03 13-change_group
drwx--x--x 2 spencer 4096 Sep 20 14:49 dir0
drwx--x--x 2 spencer 4096 Sep 20 14:49 dir1
drwxr-x--x 2 spencer 4096 Sep 20 14:59 dir_holberton
-rw-rw-r-- 1 23 spencer Sep  20 14:25 hello
@ubuntu:/tmp/h$ sudo ./13-change_group 
@ubuntu:/tmp/h$ ls -l
total 24
-rwxrwxr-x 1 34 Sep 20 15:03 13-change_group
drwx--x--x 2 4096 Sep 20 14:49 dir0
drwx--x--x 2 4096 Sep 20 14:49 dir1
drwx--x--x 2 4096 Sep 20 14:49 dir2
drwxr-x--x 2 4096 Sep 20 14:59 dir_holberton
-rw-rw-r-- 1 holberton   23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$ 
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 13-change_group

#### 14. Owner and group mandatory

Script that changes the owner to betty and the group owner to holberton for all the files and directories in the working directory.

```
spencer@ubuntu:/tmp/h$ ls -l
total 24
-rwxrwxr-x 1 spencer 36 Sep 20 15:06 14-change_owner_and_group
drwx--x--x 2 spencer 4096 Sep 20 14:49 dir0
drwx--x--x 2 spencer 4096 Sep 20 14:49 dir1
drwx--x--x 2 spencer 4096 Sep 20 14:49 dir2
drwxr-x--x 2 spencer spencer 4096 Sep 20 14:59 dir_holberton
-rw-rw-r-- 1 spencer spencer23 Sep 20 14:25 hello
julien@ubuntu:/tmp/h$ sudo ./14-change_owner_and_group 
julien@ubuntu:/tmp/h$ ls -l
total 24
-rwxrwxr-x 1 betty holberton   36 Sep 20 15:06 14-change_owner_and_group
drwx--x--x 2 betty holberton 4096 Sep 20 14:49 dir0
drwx--x--x 2 betty holberton 4096 Sep 20 14:49 dir1
drwx--x--x 2 betty holberton 4096 Sep 20 14:49 dir2
drwxr-x--x 2 betty holberton 4096 Sep 20 14:59 dir_holberton
-rw-rw-r-- 1 betty holberton   23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$ 
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 14-change_owner_and_group

#### 15. Symbolic links mandatory

Script that changes the owner and the group owner of the file _hello to betty and holberton respectively.

The file _hello is in the working directory
The file _hello is a symbolic link

```
spencer@ubuntu:/tmp/h$ ls -l
total 24
-rwxrwxr-x 1 spencer 44 Sep 20 15:12 15-symbolic_link_permissions
-rw-rw-r-- 1 spencer 23 Sep 20 14:25 hello
lrwxrwxrwx 1 spencer 5 Sep 20 15:10 _hello -> hello
julien@ubuntu:/tmp/h$ sudo ./15-symbolic_link_permissions 
julien@ubuntu:/tmp/h$ ls -l
total 24
-rwxrwxr-x 1 spencer spencer 44 Sep 20 15:12 15-symbolic_link_permissions
-rw-rw-r-- 1 spencer spencer      23 Sep 20 14:25 hello
lrwxrwxrwx 1 betty  holberton    5 Sep 20 15:10 _hello -> hello
spencer@ubuntu:/tmp/h$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 15-symbolic_link_permissions

#### 16. If only mandatory

Write a script that changes the owner of the file hello to betty only if it is owned by the user guillaume.

The file hello will be in the working directory

```
spencer@ubuntu:/tmp/h$ ls -l
total 24
-rwxrwxr-x 1 spencer    spencer 47 Sep 20 15:18 16-if_only
-rw-rw-r-- 1 spencer      23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$ sudo ./16-if_only 
spencer@ubuntu:/tmp/h$ ls -l
total 24
-rwxrwxr-x 1 spencer 47 Sep 20 15:18 16-if_only
-rw-rw-r-- 1 betty  spencer 23 Sep 20 14:25 hello
spencer@ubuntu:/tmp/h$ 
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 16-if_only

#### 17. Star Wars #advanced

Script that will play the StarWars IV episode in the terminal.

GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 100-Star_Wars

#### 18. RTFM #advanced

A manual that looks exactly like this one:
```
ubuntu@ip-172-31-63-244:/tmp/man$ wc 101-man_holberton
 16  89 608 101-man_holberton
ubuntu@ip-172-31-63-244:/tmp/man$ man ./101-man_holberton
man_holberton
```
GitHub repository: holberton-system_engineering-devops
Directory: 0x01-shell_permissions
File: 101-man_holberton

