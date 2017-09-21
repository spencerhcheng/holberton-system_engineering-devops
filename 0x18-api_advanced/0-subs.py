#!/usr/bin/python3
import requests
import sys


def number_of_subscribers(subreddit):
    """
    Queries the Reddit API and returns the number of subscribers
    for a given subreddit
    """
    sub_reddit = sys.argv[1]
    url = 'https://www.reddit.com/r/'
    reddit_url = ('https://www.reddit.com/r/{}/about.json'.format(sub_reddit))

    r = requests.get(reddit_url, headers={'User-agent': 'Spencer'})
    if r.status_code == 301:
        return (0)

    r_sub = r.json().get('data').get('subscribers')
    if r_sub is None:
        return (0)
    else:
        return (r_sub)
