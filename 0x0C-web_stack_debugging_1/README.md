## 0x0C. WEB STACK DEBUGGING #1

![Web server](https://i.imgur.com/B4eeypV.jpg)

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### ENVIRONMENT
All files are written and compiles on `Ubuntu 14.04 LTS`. The first line of bash scripts will be exactly `#!/usr/bin/env bash`. Bash scripts are checked using `Shellcheck`.

### OBJECTIVES
Learning points:
* Web stack debugging
* Is the web server started?
* On what port should it listen?
* Is it actually listening on this port?
* It is listening on the correct server IP?
* Is there a firewall enabled?
* Have you looked at logs?
* Can I connect to the HTTP port from the location I am browsing from?

##### 0. Nginx likes port 80
Script that starts Nginx and listens on port `80` for all the server's active IPv4 IPs.

Example (BEFORE):

```
root@966c5664b21f:/# curl 0:80
curl: (7) Failed to connect to 0 port 80: Connection refused
root@966c5664b21f:/#
```

AFTER:

```
root@966c5664b21f:/# curl 0:80
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
root@966c5664b21f:/#
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x0C-web_stack_debugging_1
File: 0-nginx_likes_port_80
