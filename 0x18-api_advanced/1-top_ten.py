#!/usr/bin/python3
import requests
import sys


def top_ten(subreddit):
    """
    Queries the Reddit API and returns the number of subscribers
    for a given subreddit
    """
    reddit_url = ('https://www.reddit.com/r/{}/hot.json'.format(subreddit))
    r = requests.get(reddit_url, headers={'User-agent': 'Spencer'})

    if r.status_code == 301:
        print('None')
        return

    i = 0
    r_sub = r.json().get('data', {}).get('children', {})

    if (r_sub is None or len(r_sub) == 0):
        print ('None')
        return

    for entries in r_sub:
        for k, v in entries.get('data').items():
            if k == 'title':
                if i == 10:
                    break
                i += 1
                print(v)
    if i == 0:
        print('None')
        return
