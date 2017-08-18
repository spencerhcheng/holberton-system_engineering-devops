## 0x0F. CONFIGURATION MANAGEMENT

![Config_management](http://www.adronda.org/iglesia/wp-content/uploads/2016/02/logo.jpg)

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### ENVIRONMENT
All files are written and compiles on `Ubuntu 14.04 LTS`. The first line of bash scripts will be exactly `#!/usr/bin/env bash`. Puppet manifests are checked using `puppet-lint`.

### OBJECTIVES
Learning points:
* What are puppet manifests and how to create them

#### 0. Creating a file
File created using `Puppet` in folder `/tmp`

File path is `tmp/holberton`
File permission is `0744`
File owner is `www-data`
File group is `www-data`
File contains `I love Puppet`

Example:

```
root@6712bef7a528:~# puppet apply 0-create_a_file.pp
Notice: Compiled catalog for 6712bef7a528.ec2.internal in environment production in 0.04 seconds
Notice: /Stage[main]/Main/File[holberton]/ensure: defined content as '{md5}f1b70c2a42a98d82224986a612400db9'
Notice: Finished catalog run in 0.03 seconds
root@6712bef7a528:~#
root@6712bef7a528:~# ls -l /tmp/holberton
-rwxr--r-- 1 www-data www-data 13 Mar 19 23:12 /tmp/holberton
root@6712bef7a528:~# cat /tmp/holberton
I love Puppetroot@6712bef7a528:~#
```

GitHub repository: `holberton-system_engineering-devops`
Directory: `0x0F-configuration_management`
File: `0-create_a_file.pp`

#### 1. Install a package
File created with puppet to install `puppet-lint version 2.1.1`

Example:

```
root@d391259bf577:/# puppet apply 1-install_a_package.pp
Notice: Compiled catalog for d391259bf577.hsd1.ca.comcast.net in environment production in 0.10 seconds
Notice: /Stage[main]/Main/Package[puppet-lint]/ensure: created
Notice: Finished catalog run in 2.83 seconds
root@d391259bf577:/# gem list

*** LOCAL GEMS ***

puppet-lint (2.1.1)
root@d391259bf577:/#
```

GitHub repository: `holberton-system_engineering-devops`
Directory: `0x0F-configuration_management`
File: `1-install_a_package.pp`

#### Executing a command
Using puppet, a manifest that kills a process named `killmenow` using the `exec` puppet resource and `pkill`.

Example:

Terminal #0 - starting my process

```
root@d391259bf577:/# ./killmenow
```
Terminal #1 - executing my manifest
```
root@d391259bf577:/# puppet apply 2-execute_a_command.pp
Notice: Compiled catalog for d391259bf577.hsd1.ca.comcast.net in environment production in 0.01 seconds
Notice: /Stage[main]/Main/Exec[killmenow]/returns: executed successfully
Notice: Finished catalog run in 0.10 seconds
root@d391259bf577:/# 
```
Terminal #0 - process has been terminated
```
root@d391259bf577:/# ./killmenow
Terminated
root@d391259bf577:/#
```

GitHub repository: `holberton-system_engineering-devops`
Directory: `0x0F-configuration_management`
File: `2-execute_a_command.pp`
