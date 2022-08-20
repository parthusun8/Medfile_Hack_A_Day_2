import names
import random as r
import string
import requests


def get_name():
    return names.get_full_name() + " " + names.get_last_name()


def get_phone():
    ph_no = []
    ph_no.append(r.randint(6, 9))
    for i in range(1, 10):
        ph_no.append(r.randint(0, 9))
    phone = ""
    for i in ph_no:
        phone += str(i)
    return phone


def get_gender():
    return "M" if r.randint(0, 2) else "F"


def get_age():
    return str(r.randint(18, 101))


def get_email():
    test = "".join(r.choice(string.ascii_letters) for _ in range(10))
    return test + "@gmail.com"


def get_pass():
    test = "".join(r.choice(string.ascii_letters) for _ in range(10))
    return test


def get_aadhar():
    test = "".join(r.choice(string.digits) for _ in range(12))
    return test


def get_pan():
    test = "".join(r.choice(string.digits + string.ascii_letters) for _ in range(12))
    return test


for i in range(5):
    a = {
        "name": get_name(),
        "loginEmail": get_email(),
        "loginPass": "123456",
        # "phoneNumber": get_phone(),
        # "age": get_age(),
        # "gender": get_gender(),
        # "location": r.choice(

            # ["Chennai", "Bombay", "Cuttack", "Bangla", "Delhi", "Noida", "Ghaziabad"]
        # ),
        # "aadhar": get_aadhar(),
        # "pan": get_pan(),
    }
    url = "http://1c4c-2409-4072-38e-b3ac-94cf-4c5f-c851-d534.ngrok.io/users/signup"
    x = requests.post(url, data=a)
    print(f"Registered User {i+1} successfully")
