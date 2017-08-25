## 0x12. FIREWALL

![FIREWALL](http://i.imgur.com/V1HjQ1Y.png)

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### ENVIRONMENT
All files are written and compiles on `Ubuntu 14.04 LTS`. The first line of bash scripts will be exactly `#!/usr/bin/env bash`. Scripts are checked for style using `Shellcheck version `0.3.3-1~ubuntu14.04.1`

### OBJECTIVES
Learning points:
* Set up firewall on servers

#### 0. FIREWALL ABC
 What is a firewall?
 
* A hardware security system
* A hardware or software security system
* A software security system

e What are the 2 types of firewall:
 
* Soft and hard firewall
* Incoming and outgoing firewall
* Network and host-based firewall

 What is the main function of a firewall?
 
* To filter incoming and outgoing network traffic
* To filter incoming and outgoing TCP traffic
* To filter outgoing traffic

GitHub repository: holberton-system_engineering-devops
Directory: 0x12-firewall
File: 0-firewall_ABC

#### 1. Block all incoming traffic, but...
Script installs a `ufw` firewall and sets up the following rules on web-01:

* Configures `ufw` so that it blocks all incoming traffic except the following TCP ports:
* [] - `22` SSH
* [] - `443` HTTPS SSL
* [] - `80` HTTP

GitHub repository: holberton-system_engineering-devops
Directory: 0x12-firewall
File: 1-block_all_incoming_traffic_but
