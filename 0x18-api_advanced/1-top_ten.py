#!/usr/bin/python3
"""Top ten of subreddit"""
import requests


def top_ten(subreddit):
    """
    Queries the Reddit API and returns the top ten reddict posts
    """
    reddit_url = ('https://www.reddit.com/r/{}/hot.json'.format(subreddit))
    r = requests.get(reddit_url, headers={'User-agent': 'Spencer'})

    if r.status_code == 301:
        print('None')
        return

    i = 0

    if r.json() is None:
        print('None')
        return
    r_sub = r.json().get('data', {}).get('children', {})

    if (r_sub is None or len(r_sub) == 0):
        print ('None')
        return

    for entries in r_sub:
        title = entries.get('data', {}).get('title', {})
        if (title is None or len(title) == 0):
            print('None')
            return
        if i == 10:
            break
        i += 1
        print("{}".format(title))
    if i == 0:
        print('None')
        return

if __name__ == "__main__":
    top_ten(subreddit)
