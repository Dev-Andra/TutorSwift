import sqlite3
import os

os.chdir(r"C:\Users\devpa\Desktop\TutorSwift-1\server")
conn = sqlite3.connect("userAccounts.db")

cursor = conn.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS accounts (username TEXT, password TEXT, email TEXT, role TEXT)""")
conn.commit()

def registerAccount(username, password, email, role):
    cursor.execute("INSERT INTO accounts (username, password, email, role) VALUES (?, ?, ?, ?)", (username, password, email, role, ))
    conn.commit()


