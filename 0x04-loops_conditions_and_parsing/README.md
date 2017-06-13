## 0x04. Loops, conditions and parsing

### OBJECTIVES
* [] - The `for` loop
* [] - The `while` loop
* [] - The `until` loop
* [] - Variable assignment and arithmetic
* [] - Comparison operators
* [] - File test operators
* [] - `env`, `cut`
* [] - `for`, `while`, `until`, `if`


##### GitHub repository: `holberton-system_engineering-devops``
##### Directory: `1-for_holberton_school`
### Author
#### Twitter: @spencerhcheng
#### LinkedIn: https://www.linkedin.com/in/spencer-cheng-284b4b55
#### Github: @spencerhcheng

### FILE SETUP
All files are written and compiles on Ubuntu 14.04 LTS. Scripts will pass `Shellcheck` (version `0x3.3-1~ubuntu14.04.1`)

#### 0. Create a SSH RSA key pair
Generate and provide an SSH RSA key pair. 

#### 1. For Holberton School loop
A bash script that displays `Holberton School` 10 times using the `for` loop.

File: `1-for_holberton_school`

#### 2. While Holberton School loop
A bash script that displays `Holberton School` 10 times using the `while` loop.

File: `2-while_holberton_school`

#### 3. Until Holberton School loop
A bash script that displays `Holberton School` 10 times using the `until` loop.

File: `3-until_holberton_school`

#### 4. If 9, say Hi!
A bash script that displays `Holberton School` 10 times, but for the 9th iteration displays `Holberton School` and then `Hi` on a new line.

File: `4-if_9_say_hi`

#### 5. 4 bad luck, 8 is your chance
A bash script that loops from to to 10 and:
* []- displays `bad luck` for the 4th loop iteration
* [] - displays `good luck` for the 8th loop iteration
* [] - displays `Holberton School` for the other iterations

Requirements: The `while` loop must be used along with `if`, `elif` and `else` statements

File: 5-4_bad_luck_8_is_your_choice`

#### 6. Superstitious numbers
A bash script that displays numbers from 1 to 20 and:
* [] - displays `bad luck from China` for the 4th loop iteration
* [] - displays `bad luck from Japan` for the 9th loop iteration
* [] - displays `bad luck from Italy` for the 17th loop iteration

Requirements: The `while` loop must be used along with `case` statements

File: `6-superstitious_numbers`

#### 7. Clock
A bash script that displays the time for 12 hours and 59 minutes.
* [] - displays hours from 0 to 12
* [] - displays minuts from 1 to 59

Requirements: use `while` loops

File: `7-clock`

#### 8. For ls
A bash script that displays:
* [] - content of the current directory
* [] - in list format
* [] - display only the part of the name after the first dash

Requirements: use `for` loops

File: `8-for_ls`

#### 9. To file, or not to file
A bash script that gives you information about the `holbertonschool` file.

Script checks whether the file exists and prints:
* [] if the file exists - `holbertonschool file exists`
* [] if the file does not exist - `holbertonschool file does not exist`

If the file exists, print:
* [] if the file is empty - `holbertonschool file is empty`
* [] if the file is not empty - `holbertonschool file is not empty`
* [] if the file is a regular file - `holbertonschool is a regular file`
* [] if the file is not a regular file: `nothing`

File: `9-to_file_or_not_to_file`

#### 10. FizzBuzz
A bash script that displays numbers from 1 to 100.

* [] - Displays `FizzBuzz` when the number is a multiple of 3 and 5.
* [] - Displays `Fizz` when the number is a multiple of 3
* [] - Displays `Buzz` when the number is a multiple of 5
* [] - Otherwise, displays the number
* [] - Prints in list format

File: `10-fizzbuzz`

#### 11. Read and cut
A bash script that displays the content of the file `/etc/passwd`

Scrips displays:
* [] - `username`
* [] - `group id`
* [] - `shell full path for the user`
