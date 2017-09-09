# 0x14. APPLICATION SERVER #0

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### ENVIRONMENT
All files are written and compiles on `Ubuntu 14.04 LTS`. The first line of bash scripts will be exactly `#!/usr/bin/env bash`. Bash scripts are checked using `Shellcheck`.

### OBJECTIVES
Learning points:
* Learn how to serve dynamic content off our web stack project by servicing content via an application server

##### 0. WELCOME GUNICORN
Serve AirBnB clone - web framework - on `web01`.
Steps:
* Git clone Airbnb clone
* Install Gunicorn and other libraries required by application
* Create an Upstart script that starts Gunicorn to serve web_flask/0-hello_route.py from Airbnb clone
* Setup Nginx so that the route /airbnb-onepage/ points to Gunicorn
* Nginx must serve this locally but also on its public IP on port 80
* Provide the Upstart config file, upload it as answer file with the name 0-welcome_gunicorn-upstart_config
* Provide the Nginx config file wrote, upload it as answer file with the name 0-welcome_gunicorn-nginx_config

Example:
```
spencer@web01$ sudo service airbnb-onepage start
airbnb-onepage start/running, process 17981
spencer@web01$ curl http://127.0.0.1:8001
Hello HBNB!spencer@web01$
spencer@web01$
spencer@web01$ curl http://127.0.0.1/airbnb-onepage/
Hello HBNB!spencer@web01$
``` 

GitHub repository: holberton-system_engineering-devops
Directory: 0x14-application_server
File: 0-welcome_gunicorn-upstart_config, 0-welcome_gunicorn-nginx_config

#### 1. PASS A QUERY PARAMETER
Serve AirBnB clone - web framework - on `web01`.
Steps:
* Create an Upstart script that starts Gunicorn to serve web_flask/6-number_odd_or_even.py from Airbnb clone
* Setup Nginx so that the route /airbnb-dynamic/ points to Gunicorn
* Nginx must serve this locally but also on its public IP on port 80
* Provide Upstart config file, name it 1-pass_parameter-upstart_config
* Provide Nginx config file, name it 1-pass_parameter-nginx_config

Example:
```
spencer@web01$ sudo service airbnb-parameter start
airbnb-parameter start/running, process 18155
spencer@web01$ curl 127.0.0.1:8002/number_odd_or_even/1
<!DOCTYPE html>
<HTML lang="en">
    <HEAD>
        <TITLE>HBNB</TITLE>
    </HEAD>
    <BODY>
        <H1>Number: 1 is odd</H1>
    </BODY>
</HTML>spencer@web01$ curl 127.0.0.1:8002/number_odd_or_even/3
<!DOCTYPE html>
<HTML lang="en">
    <HEAD>
        <TITLE>HBNB</TITLE>
    </HEAD>
    <BODY>
        <H1>Number: 3 is odd</H1>
    </BODY>
</HTML>spencer@web01$
$ curl http://127.0.0.1/airbnb-dynamic/1
<!DOCTYPE html>
<HTML lang="en">
    <HEAD>
        <TITLE>HBNB</TITLE>
    </HEAD>
    <BODY>
        <H1>Number: 1 is odd</H1>
    </BODY>
spencer@web01$
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x14-application_server
File: 1-pass_parameter-upstart_config, 1-pass_parameter-nginx_config

