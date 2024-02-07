import sqlite3
import os

os.chdir(r"C:\Users\nikrp\Documents\TutorSwift\server")

conn = sqlite3.connect("userAccounts.db")

cursor = conn.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS accounts (username TEXT, password INT, email TEXT, role TEXT)""")
conn.commit()

def findAccount(username:str, password:str):
    cursor.execute("SELECT * FROM accounts WHERE username = '{user}' OR email = '{user}' AND password = '{}'".format(password, user=username))
    account = cursor.fetchall()
    if account == []:
        return 401
    else:
        return 202

