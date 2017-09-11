## 0x11 Postmortem

![Postmortem](https://1.bp.blogspot.com/-sbh6ZmmUMns/WG5BTba4p0I/AAAAAAAAAos/-6CPn4oE3d0s-MZjD-EBhY4eTNHoExwMACLcB/s1600/flatline.jpg)

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### ISSUE SUMMARY
On August 25th, from 12:01am to 3:45pm PST, a failure to migrate from apache2 to our updated conted hosted on nginx occured. The updated web content deployed in the `nginx` server was not available to website visitors. The root cause was due to our existing web server, `apache2`, still occupying port 8080. 

#### TIMELINE
[ 4: 45 am PST ] - First attempt to deploy nginx web server using SRE developed bash script.

[ 8: 14 am PST ] - Marketing team call in to report that the new season of merchandise that is supposed to go live at 12:00 am PST on August 25th, is not displaying on the website. They report various phone calls from clients trying to access the website for the new releases.

[ 8: 45 am PST ] - Message received from our CEO, Mr. Koolhaas, that the website must go online. Q3 results heavily depend on the success of this release.

[ 9: 03 am PST ] - Team of three engineers, including myself, arrive at the office and attempt to debug.

[ 9: 33 am PST ] - Realize web servers are being run as `root`. This can cause potential problems, as non-verified indivudals who gain access to the web server may be able to enact malicious attacks on the system.

[  9: 49 am PST ] - First version of bash script created to change user from `root` to `nginx` and set default file to listen to port 8080. Attempt to start `nginx`.

`Unable to listen on port 8080` issue detected.

[ 10:55 am PST ] - Look up commands to see running processes.

[ 12:13 pm PST ] - Successfully create script to kill apache2 PID.

[ 12: 30 pm PST ] - Finalize script for testing on Docker container 278. 

[ 1: 03 pm PST ] - Script kills apache2 processes listening in on port 8080, but fails to restart. Perhaps there are other apache2 services running that are preventing nginx to reload.

[ 1: 45 pm PST ] - Run script that kills all apache2 processes. nginx reloads!! Almost there...

[ 2:04 pm PST ] - Schedule emergency meeting with the team to review code for deployment on web servers.

[ 3: 00 pm PST ] - Marketing sends out message to visitors and email subscribers apologizing for the hiccup and notifies them that the updated page will be live shortly.

[ 3:40 pm PST ] - Deploy script - nginx is running and connected to the website. SUCCESS

#### CAUSE & RESOLUTION

The root cause of this problem was failure to check the script. Even though we start nginx, set user and change port to listen on 8080, we failed to account for the fact that another process (apache2) was using the same port.

The script was executed at midnight the prior night and we only became aware of the issue shortly before the work day started when the marketing team went on the website.

In order to fix the issue, we needed to shut down the apache2 service on our web servers as they were occupying the ports required for nginx.

After deploying a new script on our web servers, apache2 processes were killed before reloading nginx.

#### PREVENTATIVE MEASURES

It is always important to review and test code that is about to be deployed, especially for such an important event as this one was.

Additionally, we should employ monitoring services to ping and check the website to verify that the updated content is being served.
