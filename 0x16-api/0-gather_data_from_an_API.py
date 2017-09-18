#!/usr/bin/python3
"""Returns information about TODO list progress"""
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
    total_tasks = 0
    completed_tasks = 0
    task_list = []

    for entry in r_obj_todos:
        if (entry['userId'] == int(id_number)):
            total_tasks += 1
            if entry['completed'] is True:
                task_list.append(entry['title'])
                completed_tasks += 1

    for users in r_obj_users:
        if (users['id'] == int(id_number)):
            print("Employee {} is done with tasks({}/{}):".
                  format((users['name']), completed_tasks, total_tasks))

    for task in task_list:
        print("\t{}".format(task))
