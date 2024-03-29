import sqlite3
import os

os.chdir(r"C:\Users\panda\tutorswift-1\server")
conn = sqlite3.connect("userAccounts.db")

cursor = conn.cursor()

# create a table
cursor.execute("""CREATE TABLE IF NOT EXISTS accounts (username TEXT, password TEXT, email TEXT, role TEXT)""")
conn.commit()

def registerAccount(username, password, email, role):
    cursor.execute("INSERT INTO accounts (username, password, email, role) VALUES (?, ?, ?, ?)", (username, password, email, role, ))
    conn.commit()


cursor.execute("SELECT * FROM accounts")

print(cursor.fetchall())

registerAccount("billybobjoe1234", "bob1234", "bobbbybobbo", "tutor")

cursor.execute("SELECT * FROM accounts")

print(cursor.fetchall())