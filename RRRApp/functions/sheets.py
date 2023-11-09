import requests
import json
from ..appsecret import username, password

url = 'https://sheetdb.io/api/v1/754ztoexqei27'

headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

#Insert Row
def insertRow(firstName,lastName, email, phoneNumber, major, graduation, dob, city, shirtSize):
    '''
    Function to insert details into the Google Sheet.
    '''
    data = {
        'data': [
            {
                'FirstName': firstName.capitalize(),
                'LastName': lastName.capitalize(),
                'Email': email,
                'PhoneNumber' : phoneNumber,
                'Major' : major,
                'Graduation' : graduation,
                'DOB' : dob,
                'City' : city,
                'ShirtSize' : shirtSize,
            }
        ]
    }

    response = requests.post(url, data=json.dumps(data), headers=headers, auth=(username, password))

    if response.status_code == 201:
        response_data = response.json()
        print(response_data)
    else:
        print(f"Request failed with status code {response.status_code}")
        raise Exception
    # row = [firstName,lastName, email, section] # Row to be inserted
    # sheet.insert_row(row,0) # Puts the row at index 0