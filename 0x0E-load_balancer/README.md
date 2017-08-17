## 0x0E. Load balancer

![Web server](http://i.imgur.com/qfdked8.png)

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### ENVIRONMENT
All files are written and compiles on `Ubuntu 14.04 LTS`. The first line of bash scripts will be exactly `#!/usr/bin/env bash`. Bash scripts are checked using `Shellcheck`.

### OBJECTIVES
Learning points:
* Learn how to distribute traffic needs to be distributed to servers by implementing a load balancer

##### 0. Double the number of webservers
The web server `web-02` will be configured to be identical to `web-01`. Nginx will be configeured so that its HTTP response contains a custom header. The name of the custom HTTP header is called `X-Served-By` and the value of the header is the hostname of the server  Nginx is running on.

Error code `SC2154` is ignored for `shellcheck`

Expected output:

```
spencer@ubuntu$ curl -sI 34.198.248.145 | grep X-Served-By
X-Served-By: 03-web-01
spencer@ubuntu$ curl -sI 54.89.38.100 | grep X-Served-By
X-Served-By: 03-web-02
spencer@ubuntu$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x0E-load_balancer
File: 0-custom_http_response-header

##### 1. Installing a load balancer
Configures `HAProxy` on the `lb-01` server so that it can send traffic to `web-01` and `web-02`. Distributes requests using a roundrobin algorithm. Servers are configured with the following host names:
* `[STUDENT_ID]-web-01`
* `[STUDENT_ID]-web-02`

Example:

```
spencer@ubuntu$ curl -Is 54.210.47.110
HTTP/1.1 200 OK
Server: nginx/1.4.6 (Ubuntu)
Date: Mon, 27 Feb 2017 06:12:17 GMT
Content-Type: text/html
Content-Length: 30
Last-Modified: Tue, 21 Feb 2017 07:21:32 GMT
Connection: keep-alive
ETag: "58abea7c-1e"
X-Backend-Server: 03-web-01
Accept-Ranges: bytes

spencer@ubuntu$ curl -Is 54.210.47.110
HTTP/1.1 200 OK
Server: nginx/1.4.6 (Ubuntu)
Date: Mon, 27 Feb 2017 06:12:19 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Tue, 04 Mar 2014 11:46:45 GMT
Connection: keep-alive
ETag: "5315bd25-264"
X-Backend-Server: 03-web-02
Accept-Ranges: bytes

spencer@ubuntu$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x0E-load_balancer
File: 1-install_load_balancer
