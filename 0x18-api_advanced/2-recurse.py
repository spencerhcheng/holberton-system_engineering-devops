#!/usr/bin/python3
"""Top ten of subreddit"""
import requests
import sys


def recurse(subreddit, hot_list=[], after=""):
    """
    Queries the Reddit API and returns the top ten reddict posts
    """
    if after is not None:
        reddit_url = ('https://www.reddit.com/r/{}/hot.json?&after={}'.
                      format(subreddit, after))
        r = requests.get(reddit_url, headers={'User-agent': 'Spencer'})
        if r.json() is None:
            return None
        after = r.json().get('data', {}).get('after', {})
        r_sub = r.json().get('data', {}).get('children', {})
        if (after is None or r_sub is None or
           len(after) == 0 or len(r_sub) == 0):
            return None
        for entries in r_sub:
            title = entries.get('data', {}).get('title', {})
            hot_list.append(list)
        recurse(subreddit, hot_list, after)
    return (hot_list)
