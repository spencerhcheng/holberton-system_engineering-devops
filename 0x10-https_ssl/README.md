## 0x10. HTTPS SSL

![HTTPS](http://i.imgur.com/FlhGPEK.png)

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### ENVIRONMENT
All files are written and compiles on `Ubuntu 14.04 LTS`. The first line of bash scripts will be exactly `#!/usr/bin/env bash`. Scripts are checked for style using `Shellcheck version `0.3.3-1~ubuntu14.04.1`

### OBJECTIVES
Learning points:
* What is HTTPS SSL 2 main roles
* What is the purpose encrypting traffic
* What SSL termination means

#### 0. HTTPS ABS
__What is HTTPS?__
* [] - A secure version of HTTP
* [] - A faster version of HTTP
* [] - A superior version of HTTP

__Why do we need HTTPS?__
* [] - To encrypt credit card and social security number information going between the client and the website servers
* [] - To encrypt all communication between the client and the website servers
* [] - To accelerate the communication between the client and the website servers

__Where should an HTTPS certificate be placed?__
* [] - In a secure location where nobody can access it
* [] - You can host it anywhere but you have to share the link to it on your website
* [] - On your website web server(s)

GitHub repository: holberton-system_engineering-devops
Directory: 0x10-https_ssl
File: 0-https_abc

#### 1. World wide web
Domain zone is configured so that the subdomain www points to the load-balancer IP (lb-01). Other subdomains are added to make life easier, and information about subdomains will be displayed.

Output: The subdomain `[SUB_DOMAIN]` is a `[RECORD_TYPE]` record and points to `[DESTINATION]`

Example:

```
spencer@ubuntu$ dig www.holberton.online | grep -A1 'ANSWER SECTION:'
;; ANSWER SECTION:
www.holberton.online.   87  IN  A   54.210.47.110
spencer@ubuntu$ dig lb-01.holberton.online | grep -A1 'ANSWER SECTION:'
;; ANSWER SECTION:
lb-01.holberton.online. 101 IN  A   54.210.47.110
spencer@ubuntu$ dig web-01.holberton.online | grep -A1 'ANSWER SECTION:'
;; ANSWER SECTION:
web-01.holberton.online. 212    IN  A   34.198.248.145
spencer@ubuntu$ dig web-02.holberton.online | grep -A1 'ANSWER SECTION:'
;; ANSWER SECTION:
web-02.holberton.online. 298    IN  A   54.89.38.100
spencer@ubuntu$
spencer@ubuntu$ ./1-world_wide_web holberton.online
The subdomain www is a A record and points to 54.210.47.110
The subdomain lb-01 is a A record and points to 54.210.47.110
The subdomain web-01 is a A record and points to 34.198.248.145
The subdomain web-02 is a A record and points to 54.89.38.100
spencer@ubuntu$
spencer@ubuntu$ ./1-world_wide_web holberton.online web-02
The subdomain web-02 is a A record and points to 54.89.38.100
spencer@ubuntu$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x10-https_ssl
File: 1-world_wide_web

#### 2. HAproxy SSL termination

A certificate using `certbot` used to configure `HAproxy` to accept encrypted traffic for the subdomain `www`.

`HAproxy` listens on port `TCP 433`, accepts `SSL` traffic and serves encrypted traffic that will return the `/` of the web server.

`HAproxy 1.5` is used since SSL termination is not available before v1.5

Example:
```
spencer@ubuntu$ curl -sI https://www.holberton.online
HTTP/1.1 200 OK
Server: nginx/1.4.6 (Ubuntu)
Date: Tue, 28 Feb 2017 01:52:04 GMT
Content-Type: text/html
Content-Length: 30
Last-Modified: Tue, 21 Feb 2017 07:21:32 GMT
ETag: "58abea7c-1e"
X-Backend-Server: 03-web-01
Accept-Ranges: bytes
spencer@ubuntu$
spencer@ubuntu$ curl https://www.holberton.online
Holberton School for the win!
spencer@ubuntu$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x10-https_ssl
File: 2-haproxy_ssl_termination


