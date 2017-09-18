#!/usr/bin/python3
"""Returns information about TODO list progress"""
import json
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
    task_list = {}
    file_name = id_number + ".json"
    my_list = []

    print(file_name)
    for users in r_obj_users:
        if (users.get('id') == int(id_number)):
            user_name = users.get('username')
            for entry in r_obj_todos:
                my_dict = {}
                if (entry.get('userId') == int(id_number)):
                    my_dict["task"] = entry.get('title')
                    my_dict["completed"] = entry.get('completed')
                    my_dict["username"] = user_name
                    my_list.append(my_dict)

    task_list['{}'.format(id_number)] = my_list

    with open(file_name, mode='w', encoding='utf-8') as file_open:
        f = json.dumps(task_list)
        file_open.write(f)
