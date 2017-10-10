## 0x14 Regular expression

![Regular_expressions](https://www.maketecheasier.com/assets/uploads/2013/01/regular-expressions2.jpg)

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### ENVIRONMENT
All files are written and compiles on `Ubuntu 14.04 LTS`. The first line of ruby scripts will be exactly `#!/usr/bin/env ruby`.

### OBJECTIVES
* Learn how to use regular expressions (regex).

##### 0. Simply matching Holberton
* regex must match `Holberton`
* Ruby script that accepts one argument and passes it to a regular expression matching method.

Example:

```
spencer@ubuntu$ ./0-simply_match_holberton.rb Holberton | cat -e
Holberton$
spencer@ubuntu$ ./0-simply_match_holberton.rb "Holberton School" | cat -e
Holberton$
spencer@ubuntu$ ./0-simply_match_holberton.rb "Holberton School Holberton" | cat -e
HolbertonHolberton$
spencer@ubuntu$ ./0-simply_match_holberton.rb "Grace Hopper" | cat -e
$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x1B-regular_expressions
File: 0-simply_match_holberton.rb

##### 1. Repetition Token #0
* regex that will match following cases:

![Regular_expressions](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-sysadmin_devops/78/repetition-token-0.png)

GitHub repository: holberton-system_engineering-devops
Directory: 0x1B-regular_expressions
File: 1-repetition_token_0.rb

##### 2. Repetition Token #1

* regex that matches the following cases:

![repetition_token](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-sysadmin_devops/78/repetition-token-1.png)

GitHub repository: holberton-system_engineering-devops
Directory: 0x1B-regular_expressions
File: 2-repetition_token_1.rb

##### 3. Repetition Token #2

* regex that matches the following cases:

![rep_token_2](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-sysadmin_devops/78/repetition-token-2.png)

GitHub repository: holberton-system_engineering-devops
Directory: 0x1B-regular_expressions
File: 3-repetition_token_2.rb

##### 4. Repetition Token #3

* regex that matches following cases:

![rep_tok_3](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-sysadmin_devops/78/repetition-token-3.png)

GitHub repository: holberton-system_engineering-devops
Directory: 0x1B-regular_expressions
File: 4-repetition_token_3.rb

##### 5. Not quite HBTN yet
A regular expression that matches a string that starts by h ends by n and can have any single character in between.

Example:

```
spencer@ubuntu$ ./5-beginning_and_end.rb 'hn' | cat -e
$
spencer@ubuntu$ ./5-beginning_and_end.rb 'hbn' | cat -e
hbn$
spencer@ubuntu$ ./5-beginning_and_end.rb 'hbtn' | cat -e
$
spencer@ubuntu$ ./5-beginning_and_end.rbb 'h8n' | cat -e
h8n$
spencer@ubuntu$
$
```

##### 6. Call me maybe
* Regular expression that matches a 10 digit phone number

Example:

```
spencer@ubuntu$ ./6-phone_number.rb 4155049898 | cat -e
4155049898$
spencer@ubuntu$ ./6-phone_number.rb " 4155049898" | cat -e
$
spencer@ubuntu$ ./6-phone_number.rb "415 504 9898" | cat -e
$
spencer@ubuntu$ ./6-phone_number.rb "415-504-9898" | cat -e
$
spencer@ubuntu$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x1B-regular_expressions
File: 6-phone_number.rb

##### 7. OMG WHY ARE YOU SHOUTING?
* Regular expression that matches capital letters

Example:
```
spencer@ubuntu$ ./7-OMG_WHY_ARE_YOU_SHOUTING.rb "I realLy hOpe VancouvEr posseSs Yummy Soft vAnilla Dupper Mint Ice Nutella cream" | cat -e
ILOVESYSADMIN$
spencer@ubuntu$ ./7-OMG_WHY_ARE_YOU_SHOUTING.rb "WHAT do you SAY?" | cat -e
WHATSAY$
spencer@ubuntu$ ./7-OMG_WHY_ARE_YOU_SHOUTING.rb "cannot read you" | cat -e
$
spencer@ubuntu$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x1B-regular_expressions
File: 7-OMG_WHY_ARE_YOU_SHOUTING.rb
