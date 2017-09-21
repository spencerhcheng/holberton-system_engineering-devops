## 0x18. API advanced

![API](http://i.imgur.com/WIxXad8.png)

#### AUTHOR
Spencer Cheng: [github account](https://github.com/spencerhcheng), [twitter](https://twitter.com/spencerhcheng)

#### ENVIRONMENT
All files are written and compiles on `Ubuntu 14.04 LTS`. The first line of python scripts will be exactly `#!/usr/bin/python3`. Scripts are checked for style using `PEP8`

### OBJECTIVES
* How to read API documentation to find the endpoints you're looking for
* How to use an API with pagination
* How to parse JSON results from an API
* How to make a recursive API call
* How to sort a dictionary by value

##### 0. How many subs?
A function that queries the Reddit API (https://www.reddit.com/dev/api/) and returns the number of subscribers (not active users, total subscribers) for a given subreddit. If an invalid subreddit is given, the function returns 0.

Prototype: 'def number_of_subscribers(subreddit)`

Example:
```
wintermancer@ubuntu~/reddit_api/project $ cat 0-main.py
#!/usr/bin/python3
import sys

if __name__ == '__main__':
    number_of_subscribers = __import__('0-subs').number_of_subscribers
    if len(sys.argv) < 2:
        print("Please pass an argument for the subreddit to search.")
    else:
        print("{:d}".format(number_of_subscribers(sys.argv[1])))
spencer@ubuntu~/reddit_api/project $ python3 0-main.py programming
756024
spencer@ubuntu~/reddit_api/project $ python3 0-main.py this_is_a_fake_subreddit
0
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x18-api_advanced
File: 0-subs.py

##### 1. Top Ten
Function that queries the Reddit API (https://www.reddit.com/dev/api/) and prints the titles of the first 10 hot posts listed for a given subreddit.

Prototype: `def top_ten(subreddit)`

Example:
```
spencer@lapbox ~/reddit_api/project $ cat 1-main.py
#!/usr/bin/python3
import sys

if __name__ == '__main__':
    top_ten = __import__('1-top_ten').top_ten
    if len(sys.argv) < 2:
        print("Please pass an argument for the subreddit to search.")
    else:
        top_ten(sys.argv[1])
spencer@ubuntu~/reddit_api/project $ python3 1-main.py programming
Firebase founder's response to last week's "Firebase Costs increased by 7000%!"
How a 64k intro is made
HTTPS on Stack Overflow: The End of a Long Road
Spend effort on your Git commits
It's a few years old, but I just discovered this incredibly impressive video of researchers reconstructing sounds from video information alone
From the D Blog: Introspection, Introspection Everywhere
Do MVC like it’s 1979
GitHub is moving to GraphQL for v4 of their API (v3 was a REST API)
Google Bug Bounty - The 5k Error Page
PyCon 2017 Talk Videos
spencer@ubuntu~/reddit_api/project $ python3 1-main.py this_is_a_fake_subreddit
None
spencer@ubuntu~/reddit_api/project $ 
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x18-api_advanced
File: 1-top_ten.py

##### 2. Recurse it!

A recursive function that queries the Reddit API and returns a list containing the titles of all hot articles for a given subreddit. If no results are found for the given subreddit, the function returns None.

Prototype: `def recurse(subreddit, hot_list=[])`

Example:
```
spencer@ubuntu~/reddit_api/project $ cat 2-main.py
#!/usr/bin/python3
import sys

if __name__ == '__main__':
    recurse = __import__('2-recurse').recurse
    if len(sys.argv) < 2:
        print("Please pass an argument for the subreddit to search.")
    else:
        result = recurse(sys.argv[1])
        if result is not None:
            print(len(result))
        else:
            print("None")
spencer@ubuntu~/reddit_api/project $ python3 2-main.py programming
932
spencer@ubuntu~/reddit_api/project $ python3 2-main.py this_is_a_fake_subreddit
None
```

GitHub repository: holberton-system_engineering-devops
Directory: 0x18-api_advanced
File: 2-recurse.py
