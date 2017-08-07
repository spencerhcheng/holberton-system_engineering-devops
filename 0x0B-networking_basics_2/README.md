## 0x0B. NETWORKING BASICS PART 1

![Web server](http://i.imgur.com/s7kpNYq.png)

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### ENVIRONMENT
All files are written and compiles on `Ubuntu 14.04 LTS`. The first line of bash scripts will be exactly `#!/usr/bin/env bash`. Bash scripts are checked using `Shellcheck`.

### OBJECTIVES
Learning points:
* localhost
* 0.0.0.0
* What are `hosts` files
* What is `ifconfig`, `telnet`, `nc`, `cut`
* What is `Netcat`
* What is `/etc/hosts`
* What is localhost/127.0.0.1

##### 0. Localhost
What is a `localhost`?

A hostname that means this IP
A hostname that means this computer
An IP attached to a computer

GitHub repository: holberton-system_engineering-devops
Directory: 0x0B-networking_basics_2
File: 0-localhost

##### 1. All IPs
What is `0.0.0.0`?

All IPv4 addresses on the local machine
All the IPs
It means null in networking

GitHub repository: holberton-system_engineering-devops
Directory: 0x0B-networking_basics_2
File: 1-wildcard

##### 0. Give me a page!
After running Apache2 on the docker container, run the command in 0-give_me_a_page to get a page containing `Hello Holberton`.

GitHub repository: holberton-system_engineering-devops
Directory: 0x08-web_stack_debugging_0
File: 0-give_me_a_page

##### 1. Change your home IP
Bash script that configures a `Ubuntu` server with the below requirements:

* `localhost` resolves to `127.0.0.2`
* `facebook` resolves to `8.8.8.8`

Example output:

```
spencer@ubuntu$ ping localhost
PING localhost (127.0.0.1) 56(84) bytes of data.
64 bytes from localhost (127.0.0.1): icmp_seq=1 ttl=64 time=0.012 ms
^C
--- localhost ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 0.012/0.012/0.012/0.000 ms
spencer@ubuntu$
spencer@ubuntu$ ping facebook.com
PING facebook.com (157.240.11.35) 56(84) bytes of data.
64 bytes from edge-star-mini-shv-02-lax3.facebook.com (157.240.11.35): icmp_seq=1 ttl=63 time=15.4 ms
^C
--- facebook.com ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 15.432/15.432/15.432/0.000 ms
spencer@ubuntu$
spencer@ubuntu$ sudo ./2-change_your_home_IP
spencer@ubuntu$
spencer@ubuntu$ ping localhost
PING localhost (127.0.0.2) 56(84) bytes of data.
64 bytes from localhost (127.0.0.2): icmp_seq=1 ttl=64 time=0.012 ms
64 bytes from localhost (127.0.0.2): icmp_seq=2 ttl=64 time=0.036 ms
^C
--- localhost ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1000ms
rtt min/avg/max/mdev = 0.012/0.024/0.036/0.012 ms
spencer@ubuntu$
spencer@ubuntu$ ping facebook.com
PING facebook.com (8.8.8.8) 56(84) bytes of data.
64 bytes from facebook.com (8.8.8.8): icmp_seq=1 ttl=63 time=8.06 ms
^C
--- facebook.com ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 8.065/8.065/8.065/0.000 ms
```

* before running the script, localhost resolves to 127.0.0.1 and facebook.com resolves to 157.240.11.35
* after running the script, localhost resolves to 127.0.0.2 and facebook.com resolves to 8.8.8.8

GitHub repository: holberton-system_engineering-devops
Directory: 0x0B-networking_basics_2
File: 2-change_your_home_IP

##### 3. Show attached IPs
Bash script that displays all active IPv4 IPs on the machine it's executed on.

Example output:

```
spencer@ubuntu$ ./3-show_attached_IPs | cat -e
10.0.2.15$
127.0.0.1$
spencer@ubuntu$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x0B-networking_basics_2
File: 3-show_attached_IPs
