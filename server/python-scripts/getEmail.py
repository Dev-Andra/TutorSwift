import sqlite3
import os
import sys

os.chdir(r"C:\Users\devpa\Desktop\TutorSwift-1\server")
conn = sqlite3.connect("userAccounts.db")
cursor = conn.cursor()

def getEmail(username:str):
    cursor.execute(f"SELECT * FROM accounts WHERE username = '{username}'")
    status = cursor.fetchall()
    return status

# setStatus('smth', 0)
# cursor.execute("SELECT * FROM status")
# print(cursor.fetchall())

daStatus = getEmail(sys.argv[1])
print(daStatus)


#get b9irthday
#location.
#add photo
#add lessons
#add topics
#qualification
#who want teach / proficiency
#Lessons and pricing
#add profile url