## 0x09. Web server

![Web server](https://i.imgur.com/8Gu52Qv.png)

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### ENVIRONMENT
All files are written and compiles on `Ubuntu 14.04 LTS`. The first line of bash scripts will be exactly `#!/usr/bin/env bash`. Bash scripts are checked using `Shellcheck`.

### OBJECTIVES
Learning points:
* [] - Understand what DNS stands for, what its main role is
* [] - What DNS record types are for:
* - `A`
* - `CNAME`
* - `TXT`
* - `MX`

##### 0. Transfering a file to a server
Bash script that transfers a file from client side to a server.
###### 4 parameters covered:

* Path to file to be transferred
* IP of the server I transfer the file to
* The username `scp` connects with
* The path to the `SSH` private key that `scp` uses.

If less than 3 parameters are passed, terminal will display `Usage: 0-transfer_file PATH_TO_FILE IP USERNAME PATH_TO_SSH_KEY` if less than 3 parameters are passed.

`scp` transfers file to the user home directory `~/`
When using `scp`, strict host key checking is disabled.

Example output:

```
spencer@ubuntu$ ./0-transfer_file
Usage: 0-transfer_file PATH_TO_FILE IP USERNAME PATH_TO_SSH_KEY
spencer@ubuntu$
spencer@ubuntu$ ssh ubuntu@8.8.8.8 -i /vagrant/spencer'ls ~/'
afile
spencer@ubuntu$ 
spencer@ubuntu$ echo 'Hello World' > some_page.htmll
0+0 records in
0+0 records out
0 bytes (0 B) copied, 0.000725671 s, 0.0 kB/s
spencer@ubuntu$ ./0-transfer_file some_page.html 8.8.8.8 spencer/vagrant/private_key
some_page.html                                     100%   12     0.1KB/s   00:00
spencer@ubuntu$ ssh ubuntu@8.8.8.8 -i /vagrant/private_key 'ls ~/'
afile
some_page.html
spencer@ubuntu$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x09-web_server
File: 0-transfer_file

##### 1. Installing nginx web server
Script that installs `nginx` on the `web-01 server`. `nginx` is on listening port 80 and when sent a `GET` request at its root, will return a page that contains the string `Holberton School`.

Example output:
```
spencer@ubuntu$ curl 34.198.248.145
Holberton School for the win!
spencer@ubuntu$ curl -sI 34.198.248.145
HTTP/1.1 200 OK
Server: nginx/1.4.6 (Ubuntu)
Date: Tue, 21 Feb 2017 23:43:22 GMT
Content-Type: text/html
Content-Length: 30
Last-Modified: Tue, 21 Feb 2017 07:21:32 GMT
Connection: keep-alive
ETag: "58abea7c-1e"
Accept-Ranges: bytes

spencer@ubuntu$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x09-web_server
File: 1-install_nginx_web_server

##### 2. Setting up a domain name
Set up a Gandi account, acquired domain name using one of the extensions `.website, .site, .online and provide it in the `2-setup_a_domain_name`.

GitHub repository: holberton-system_engineering-devops
Directory: 0x09-web_server
File: 2-setup_a_domain_name

##### 3. Redirection
Script that redirects `nginx` server.

* Redirection is a `301 Moved Permanently` page.
* Configures a brand new Ubuntu machine.

Example output:

```
spencer@ubuntu$ curl -sI 34.198.248.145/redirect_me/
HTTP/1.1 301 Moved Permanently
Server: nginx/1.4.6 (Ubuntu)
Date: Tue, 21 Feb 2017 21:36:04 GMT
Content-Type: text/html
Content-Length: 193
Connection: keep-alive
Location: https://www.youtube.com/watch?v=QH2-TGUlwu4

spencer@ubuntu$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x09-web_server
File: 3-redirection

##### 4. Not found page 404
Script that configures `nginx` server to have a custom `404` page that contains the string `Ceci n'est pas une page`.

* Page returns an HTTP 404 error code.

Example output:

```
spencer@ubuntu$ curl -sI 34.198.248.145/xyz
HTTP/1.1 404 Not Found
Server: nginx/1.4.6 (Ubuntu)
Date: Tue, 21 Feb 2017 21:46:43 GMT
Content-Type: text/html
Content-Length: 26
Connection: keep-alive
ETag: "58acb50e-1a"

spencer@ubuntu$ curl 34.198.248.145/xyzfoo
Ceci n'est pas une page

spencer@ubuntu$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x09-web_server
File: 4-not_found_page_404
