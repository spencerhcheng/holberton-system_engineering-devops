#!/usr/bin/python3
"""Returns information about TODO list progress"""
import csv
import requests
import sys


if __name__ == "__main__":
    id_number = sys.argv[1]
    url_users = 'https://jsonplaceholder.typicode.com/users'
    url_todos = 'https://jsonplaceholder.typicode.com/todos'
    r_users = requests.get(url_users)
    r_todos = requests.get(url_todos)
    r_obj_users = r_users.json()
    r_obj_todos = r_todos.json()
    task_list = []

    for users in r_obj_users:
        if (users['id'] == int(id_number)):
            id_number = id_number
            user_name = users.get('username')
            for entry in r_obj_todos:
                if (entry.get('userId') == int(id_number)):
                    task_list.append([id_number, user_name,
                                     entry.get('completed'),
                                     entry.get('title')])

    with open("{}.csv".format(id_number), "wt") as csvfile:
        reader = csv.writer(csvfile, delimiter=',', quoting=csv.QUOTE_ALL)
        for entry in task_list:
            reader.writerow(entry)
