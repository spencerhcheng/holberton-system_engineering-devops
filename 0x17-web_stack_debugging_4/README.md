## 0x17. WEB STACK DEBUGGING #4

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### ENVIRONMENT
All files are written and compiles on `Ubuntu 14.04 LTS`. The first line of bash scripts will be exactly `#!/usr/bin/env bash`. Scripts are checked for style using `Shellcheck version `0.3.3-1~ubuntu14.04.1`

### OBJECTIVE
* Testing how well our web server setup featuring Nginx does under pressure.
* How to use ApacheBench for benchmarking to simulate HTTP requests to a web server.
* I make 2000 requests to the server with 100 requests at a time
