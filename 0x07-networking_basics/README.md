## 0x07. Networking basics #0

![OSI Model](http://i.imgur.com/YcSDAhS.png)

### Objectives
Learning points:
* [] - What is the OSI model - how many layers does it have, how is it organized
* [] - What is LAN - what is its typical usage/geographical size
* [] - What is the internet
* [] - What is WAN - typical usage/geographical size
* [] - What is an IP address - what are the 2 types of IP addresses, what is a localhost, what is a subnet and why was IPv6 created?
* [] - What are TCP/UDP ports. Memorize SSH, HTTP and HTTPS port numbers
* [] - What tool/protocol is often used to check if a device is connected to a network

#### ENVIRONMENT
All files are written and compiles on `Ubuntu 14.04 LTS`. The first line of bash scrips will be exatly `#!/usr/bin/env bash`.

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### 0. OSI Model
OSI (Open Systems Interconnection) is an abstract model to describe layered communication and computer network design. The idea is to segregate the different parts of what make communication possible.

It is organized from the lowest level to the highest level:

* The lowest level: layer 1 which is for transmission on physical layers with electrical impulse, light or radio signal
* The highest level: layer 7 which is for application specific communication like SNMP for emails, HTTP for your web browser, etc

![OSI Model](http://i.imgur.com/AJDRNea.jpg)

**Questions: What is the OSI model?**

1. Set of specifications that network hardware manufacturers must respect
2. The OSI model is a conceptual model that characterizes the communication functions of a telecommunication system without regard to their underlying internal structure and technology
3. The OSI model is a model that characterizes the communication functions of a telecommunication system with a strong regard to their underlying internal structure and technology

How is the OSI model organized?

1. Alphabetically
2. From the lowest to the highest level
3. Randomly

GitHub repository: holberton-system_engineering-devops
Directory: 0x07-networking_basics
File: 0-OSI_model

#### 1. Types of network

![Networksicon](http://i.imgur.com/kbaNEA1.jpg)
**Questions**
On what type of network are Holberton iMacs connected to?

1. Internet
2. WAN
3. LAN

What type of network could connect the Holberton HQ office with the Holberton-Gandi office?

1. Internet
2. WAN
3. LAN

What network do you use when you browse www.holbertonschool.com from your smartphone (not connected to the Wifi)?

1. Internet
2. WAN
3. LAN

GitHub repository: holberton-system_engineering-devops
Directory: 0x07-networking_basics
File: 1-types_of_network

##### 2. MAC and IP Address

![MACIP](http://i.imgur.com/YWtKMUr.jpg)

What is a MAC address?

1. The name of a network interface
2. The unique identifier of a network interface
3. A network interface

What is an IP address?

1. Is to devices connected to a network what postal address is to houses
2. The unique identifier of a network interface
3. Is a number that network devices use to connect to networks

GitHub repository: holberton-system_engineering-devops
Directory: 0x07-networking_basics
File: 2-MAC_and_IP_address

##### 3. UDP and TCP

![UDP/TCP)(http://i.imgur.com/bg9rSUy.jpg)

Questions:

Which statement is correct for the TCP box:
1. Is a protocol that is transferring data in a slow way but surely
2. Is a protocol that is transferring data in a fast way and might loss data along in the process
Which statement is correct for the UDP box:
1. Is a protocol that is transferring data in a slow way but surely
2. Is a protocol that is transferring data in a fast way and might loss data along in the process
Which statement is correct for the TCP worker:
1. Have you received boxes x, y, z?
2. May I increase the rate at which I am sending you boxes?

GitHub repository: holberton-system_engineering-devops
Directory: 0x07-networking_basics
File: 3-UDP_and_TCP

##### 4. TCP and UDP ports
A bash script that displays listening ports:
* Shows only listening sockets
* Shows the PID and name of the program to which each socket belongs

```
sepncer@ubuntu$ sudo ./4-TCP_and_UDP_ports
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 *:sunrpc                *:*                     LISTEN      518/rpcbind
tcp        0      0 *:ssh                   *:*                     LISTEN      1240/sshd
tcp        0      0 *:32938                 *:*                     LISTEN      547/rpc.statd
tcp6       0      0 [::]:sunrpc             [::]:*                  LISTEN      518/rpcbind
tcp6       0      0 [::]:ssh                [::]:*                  LISTEN      1240/sshd
tcp6       0      0 [::]:33737              [::]:*                  LISTEN      547/rpc.statd
udp        0      0 *:sunrpc                *:*                                 518/rpcbind
udp        0      0 *:691                   *:*                                 518/rpcbind
udp        0      0 localhost:723           *:*                                 547/rpc.statd
udp        0      0 *:60129                 *:*                                 547/rpc.statd
udp        0      0 *:3845                  *:*                                 562/dhclient
udp        0      0 *:bootpc                *:*                                 562/dhclient
udp6       0      0 [::]:47444              [::]:*                              547/rpc.statd
udp6       0      0 [::]:sunrpc             [::]:*                              518/rpcbind
udp6       0      0 [::]:50038              [::]:*                              562/dhclient
udp6       0      0 [::]:691                [::]:*                              518/rpcbind
Active UNIX domain sockets (only servers)
Proto RefCnt Flags       Type       State         I-Node   PID/Program name    Path
unix  2      [ ACC ]     STREAM     LISTENING     7724     518/rpcbind         /run/rpcbind.sock
unix  2      [ ACC ]     STREAM     LISTENING     6525     1/init              @/com/ubuntu/upstart
unix  2      [ ACC ]     STREAM     LISTENING     8559     835/dbus-daemon     /var/run/dbus/system_bus_socket
unix  2      [ ACC ]     STREAM     LISTENING     9190     1087/acpid          /var/run/acpid.socket
unix  2      [ ACC ]     SEQPACKET  LISTENING     7156     378/systemd-udevd   /run/udev/control
spencer@ubuntu$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x07-networking_basics
File: 4-TCP_and_UDP_ports

##### 5. Host on the network

![UDP/TCP](https://media.giphy.com/media/uDxkJAVSU7GY8/giphy.gifi)

The Internet Control Message Protocol (ICMP) is a protocol in the Internet protocol suite. It is used by network devices, to check if other network devices are available on the network. The command ping is using ICMP to make sure that a network device remains online or to troubleshoot issues on the network.

Bash script that pings an IP addressed passed as an argument.

* Accepts a string as an argument.
* displays `Usage: 5-is_the_host_on_the_network {IP_ADDRESS}` if no argument passed
* Ping the IP 5 times

```
spencer@ubuntu$ ./5-is_the_host_on_the_network 8.8.8.8
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=63 time=12.9 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=63 time=13.6 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=63 time=7.83 ms
64 bytes from 8.8.8.8: icmp_seq=4 ttl=63 time=11.3 ms
64 bytes from 8.8.8.8: icmp_seq=5 ttl=63 time=7.57 ms

--- 8.8.8.8 ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 7.570/10.682/13.679/2.546 ms
spencer@ubuntu$
spencer@ubuntu$ ./5-is_the_host_on_the_network
Usage: 5-is_the_host_on_the_network {IP_ADDRESS}
spencer@ubuntu$ 
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x07-networking_basics
File: 5-is_the_host_on_the_network
