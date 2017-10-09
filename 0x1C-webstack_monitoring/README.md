## 0x1C Webstack monitoring

![Web_monitoring](http://i.imgur.com/hb3pAsO.png)

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### ENVIRONMENT
All files are written and compiles on `Ubuntu 14.04 LTS`. The first line of bash scripts will be exactly `#!/usr/bin/env bash` and will be style checked using `Shellcheck`.

### OBJECTIVES
* Why do we need monitoring
* What are the 2 types of monitoring
* What is in a web server (such as Nginx) access logs
* What is in a web server error logs

##### 0. Monitor Nginx traffic
We'll monitor our Nginx server traffic (access log and error log). `Sumlogic` is installed on `web-01`.

Account is `SUMO LOGIC FREE and is configured for `NORTH AMERICA`.

![Web_monitoring2](http://i.imgur.com/a6d20PJ.jpg)

GitHub repository: `holberton-system_engineering-devops`
Directory: `0x1C-webstack_monitoring`
File: `0-monitor_your_nginx_traffic`
