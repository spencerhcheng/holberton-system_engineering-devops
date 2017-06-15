## 0x05. Processes and signals

![Holberton_logo](https://i.imgur.com/1HeldQT.png)

### OBJECTIVES
Learn about:
* [] - PID in Linux
* [] - Processes in Linux
* [] - Linux signals
* [] - The following commands
	* `ps`, `pgrep`, `pkill`, `kill`, `exit`, `trap`

### CONCEPTS
	
A PID (i.e., process identification number) is an identification number that is automatically assigned to each process when it is created on a Unix-like operating system.

A process is an executing (i.e., running) instance of a program. Each process is guaranteed a unique PID, which is always a non-negative integer.

The process init is the only process that will always have the same PID on any session and on any system, and that PID is 1. This is because init is always the first process on the system and is the ancestor of all other processes.

A very large PID does not necessarily mean that there are anywhere near that many processes on a system. This is because such numbers are often a result of the fact that PIDs are not immediately reused, in order to prevent possible errors.

The default maximum value of PIDs is 32,767. This maximum is important because it is essentially the maximum number of processes that can exist simultaneously on a system. Although this will almost always be sufficient for a small system, large servers may require many more processes. The lower the maximum value, the sooner the values will wrap around, meaning that lower values do not necessarily indicate processes that started to run earlier.

A process can be thought of as an instance of a program in execution. We called this an ‘instance of a program’, because if the same program is run lets say 10 times then there will be 10 corresponding processes.

Moving ahead, each process has its own unique process ID through which it is identified in the system. Besides it own ID, a parent’s process ID is also associated with a process.

Signals are software interrupts.

A robust program need to handle signals. This is because signals are a way to deliver asynchronous events to the application.

A user hitting ctrl+c, a process sending a signal to kill another process etc are all such cases where a process needs to do signal handling.

Linux Signals

In Linux, every signal has a name that begins with characters SIG. For example :

A SIGINT signal that is generated when a user presses ctrl+c. This is the way to terminate programs from terminal.
A SIGALRM  is generated when the timer set by alarm function goes off.
A SIGABRT signal is generated when a process calls the abort function.
etc

* Source: `www.thegeekstuff.com`, `www.linfo.org`

##### GitHub repository: `holberton-system_engineering-devops``
##### Directory: `0x05-Processes_and_signals

#### AUTHOR:

*Spencer Cheng* - [Github](https://github.com/spencerhcheng) || [Twitter](https://twitter.com/spencerhcheng) || [email](spencer.cheng@gmail.com)

### FILE SETUP
All files are written and compiles on Ubuntu 14.04 LTS. Scripts will pass `Shellcheck` (version `0x3.3-1~ubuntu14.04.1`)

#### 0. What is my PID
A bash script that displays its PID value
```
./0-what-is-my-pid
4120
```

Directory: `0x05-processes_and_signals`
File: `0-what-is-my-pid``

#### 1. List your processes
A bash script that displays a list of currently running processes. All processes, all users are displayed according to process hierarchy.

```
./1-list_your_processes | head -50
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         2  0.0  0.0      0     0 ?        S    Feb13   0:00 [kthreadd]
root         3  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [ksoftirqd/0]
root         4  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [kworker/0:0]
root         5  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [kworker/0:0H]
root         7  0.0  0.0      0     0 ?        S    Feb13   0:02  \_ [rcu_sched]
root         8  0.0  0.0      0     0 ?        S    Feb13   0:03  \_ [rcuos/0]
root         9  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [rcu_bh]
root        10  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [rcuob/0]
root        11  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [migration/0]
root        12  0.0  0.0      0     0 ?        S    Feb13   0:02  \_ [watchdog/0]
root        13  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [khelper]
root        14  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [kdevtmpfs]
root        15  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [netns]
root        16  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [writeback]
root        17  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [kintegrityd]
root        18  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [bioset]
root        19  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [kworker/u3:0]
root        20  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [kblockd]
root        21  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [ata_sff]
root        22  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [khubd]
root        23  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [md]
root        24  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [devfreq_wq]
root        25  0.0  0.0      0     0 ?        S    Feb13   0:41  \_ [kworker/0:1]
root        27  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [khungtaskd]
root        28  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [kswapd0]
root        29  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [vmstat]
root        30  0.0  0.0      0     0 ?        SN   Feb13   0:00  \_ [ksmd]
root        31  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [fsnotify_mark]
root        32  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [ecryptfs-kthrea]
root        33  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [crypto]
root        45  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [kthrotld]
root        46  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [kworker/u2:1]
root        65  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [deferwq]
root        66  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [charger_manager]
root       108  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [kpsmoused]
root       125  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [scsi_eh_0]
root       126  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [kworker/u2:2]
root       172  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [jbd2/sda1-8]
root       173  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [ext4-rsv-conver]
root       409  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [iprt]
root       549  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [kworker/u3:1]
root       808  0.0  0.0      0     0 ?        S    Feb13   0:00  \_ [kauditd]
root       834  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [rpciod]
root       846  0.0  0.0      0     0 ?        S<   Feb13   0:00  \_ [nfsiod]
root         1  0.0  0.4  33608  2168 ?        Ss   Feb13   0:00 /sbin/init
root       373  0.0  0.0  19472   408 ?        S    Feb13   0:00 upstart-udev-bridge --daemon
root       378  0.0  0.2  49904  1088 ?        Ss   Feb13   0:00 /lib/systemd/systemd-udevd --daemon
root       518  0.0  0.1  23416   644 ?        Ss   Feb13   0:00 rpcbind
statd      547  0.0  0.1  21536   852 ?        Ss   Feb13   0:00 rpc.statd -L
```

Directory: `0x05-processes_and_signals`
File: `1-list_your_processes`

#### 2. Show your Bash PID
Bash script that displays line containing the `bash` word, allowing for easy retreival of the `PID`.

```
./2-show_your_bash_pid
spencer   4404  0.0  0.7  21432  4000 pts/0    Ss   03:32   0:00          \_ -bash
spencer   4477  0.0  0.2  11120  1352 pts/0    S+   03:40   0:00              \_ bashi
./2-show_your_bash_PID
spencer   4479  0.0  0.1  10460   912 pts/0    S+   03:40   0:00                  \_ grep bash
```

Directory: `0x05-processes_and_signals`
File: `2-show_your_bash_pid`

#### 3. Show your Bash PID made easy
A bassh script that displays the PID, along with the process name, of processes which name contains the word `bash`.

```
./3-show_your_bash_pid_made_easy
4404 bash
4555 bash
./3-show_your_bash_pid_made_easy
4404 bash
4557 bash
```

Directory: `0x05-processes_and_signals`
File: `3-show_your_bash_pid_made_easy`

#### 4. To infinity and beyond
Bash script that displays `To infinity and beyond` indefinitely. In between each iteration, the process pauses with `sleep 2`

```
./4-to_infinity_and_beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
^C
```

Directory: `0x05-processes_and_signals`
File: `4-to_infinity_and_beyond`

#### 5. Kill me now
A bash script that kills `4-to_infinity_and_beyond` using `kill`.

Terminal 1:
```
./4-to_infinity_and_beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
Terminated
```

Terminal 2:
```
./5-kill_me_now 
```

#### 6. Kill me now made easy
Bash script that kills `4-to_infinity_and_beyond` without using `kill` nor `killall`

Terminal 1:
```
./4-to_infinity_and_beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
Terminated
```

Terminal 2:
```
./6-kill_me_now_made_easy
```

Directory: `0x05-processes_and_signals`
File: `6-kill_me_now_made_easy`

#### 7. Highlander
A bash script that displays `To infinity and beyond` indefinitely with a `sleep 2` between each iteration. Prints out `I am invincible!!!` when receiving a `SIGTERM` signal.

Terminal 1:
```
./7-highlander
To infinity and beyond
To infinity and beyond
I am invincible!!!
To infinity and beyond
I am invincible!!!
To infinity and beyond
To infinity and beyond
To infinity and beyond
I am invincible!!!
To infinity and beyond
^C
```

Terminal 2:
```
./67-kill_me_now_made_easy 
```

Directory: `0x05-processes_and_signals`
File: `7-highlander`

#### 8. Beheaded process
A bash script that kills the process 7-highlander.

Terminal #1
```
./7-highlander 
To infinity and beyond
To infinity and beyond
To infinity and beyond
To infinity and beyond
Killed
```

Terminal #2:
```
./8-beheaded_process
```

Directory: `0x05-processes_and_signals`
File: `8-beheaded_process`



