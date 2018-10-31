import requests
import json


HEADERS = {
    'Content-Type': "application/json",
    'Cache-Control': "no-cache",
    }


def create_user():
    url = "http://localhost:6007/api/test"

    email = "test@test.com"
    username = "test"
    password = "password"

    payload = "{\"email\": \"test5@test.com\",\n\"username\": \"test5\",\n\"password\": \"password\"\n}"

    payload = {
            "email": email,
            "username": username,
            "password": password
            }

    js_payload = json.dumps(payload)

    headers = {
        'Content-Type': "application/json",
        'Cache-Control': "no-cache",
        'Postman-Token': "75dd8a1c-9544-49fd-a010-4633a28e4e71"
        }

    response = requests.request("POST", url, data=js_payload, headers=headers)

    print(response.text)


def get_token():
    url = "http://localhost:6007/get-auth-token/"

    username = "test@test.com"
    password = "password"

    payload = {
            "username": username,
            "password": password
            }

    headers = {
        'Content-Type': "application/json",
        'Cache-Control': "no-cache",
        }

    js_payload = json.dumps(payload)

    response = requests.request("POST", url, data=js_payload, headers=headers)

    print("token response.text: ", response.text)
    print("type(response.text): ", type(response.text))

    return response.text


def create_presently_user():
    url = "http://localhost:6007/api/user-info"


    payload = {
            "birthday": "1995-03-21",
            "sex": "0.5",
            "name": "test",
            "time_created": "1995-03-15",
            "user": "test@test.com"
            }

    js_payload = json.dumps(payload)

    response = requests.request("POST", url, data=js_payload, headers=HEADERS)

    print("presently_user response.text: ", response.text)

def get_presently_user(token):
    url = "http://localhost:6007/api/get-presently-user/"+token

    response = requests.request("GET", url, headers=HEADERS)

    print("get_presently_user response.text: ", response.text)

    return response.text


def add_preference(name="food", description="good food"):
    url = "http://localhost:6007/api/add-preference"

    payload = {
            "name": name,
            "description": description
            }

    js_payload = json.dumps(payload)

    response = requests.request("POST", url, data=js_payload, headers=HEADERS)

    print("add_preference response.text: ", response.text)

def add_preference_user(user):
    url = "http://localhost:6007/api/add-preference-user"

    payload = {
            "name": "more food",
            "description": "food is good",
            "user": user,
            }

    js_payload = json.dumps(payload)

    response = requests.request("POST", url, data=js_payload, headers=HEADERS)

    print("add_preference_user response.text: ", response.text)

def add_product_recommendation(user):

    url = "http://localhost:6007/api/add-product-recommendation"

    payload = {
            "vendor": "more food",
            "price": "food is good",
            "name": user,
            "description": "asdaff",
            }

    js_payload = json.dumps(payload)

    response = requests.request("POST", url, data=js_payload, headers=HEADERS)

    print("add_product_recommendation response.text: ", response.text)


def main():
    # create_user()
    token = json.loads(get_token())
    print("token['token']: ", token['token'])
    HEADERS['Authorization'] = 'Token ' + token['token']
    # create_presently_user()
    user_id = json.loads(get_presently_user(token['token']))['id']
    # preferences = [('cooking', 'fun'), ('sports', 'extreme')]

    # for each_item in preferences:
        # add_preference(*each_item)

    add_preference_user(user_id)


if __name__ == '__main__':
    main()

