import sqlite3
import os
import sys

os.chdir(r"C:\Users\nikrp\Documents\TutorSwift\server")
conn = sqlite3.connect("userAccounts.db")

cursor = conn.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS accounts (username TEXT, password TEXT, email TEXT, role TEXT)""")
conn.commit()

def registerAccount(username:str, password:str, email:str, role:str):
    cursor.execute("INSERT INTO accounts (username, password, email, role) VALUES (?, ?, ?, ?)", (username, password, email, role, ))
    conn.commit()
    return 200

code = registerAccount(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4])
print(code)
