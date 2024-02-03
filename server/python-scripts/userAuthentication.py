import sqlite3
import os

os.chdir(r"C:\Users\devpa\Desktop\TutorSwift-1\server")

conn = sqlite3.connect("userAccounts.db")

cursor = conn.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS accounts (username TEXT, password INT, email TEXT, role TEXT)""")
conn.commit()

def findAccount(username, password):
    cursor.execute("SELECT * FROM accounts WHERE username = '{}' AND password = '{}'".format(username, password))
    account = cursor.fetchall()
    if account == []:
        return 401
    else:
        return 202

