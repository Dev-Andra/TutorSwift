import sqlite3
import os
import sys

os.chdir(r"C:\Users\devpa\Desktop\TutorSwift-1\server")
conn = sqlite3.connect("status.db")

cursor = conn.cursor()
cursor.execute("""CREATE TABLE IF NOT EXISTS status (username TEXT, status TEXT)""")
conn.commit()

def setStatus(username:str, type:str):
    cursor.execute("SELECT * FROM status WHERE username = '{}'".format(username, ))
    status = cursor.fetchall()
    print(status)
    if status == []:
        cursor.execute("INSERT INTO status (username, status) VALUES (?, ?)", (username, "offline",))
        conn.commit()
    if type == 0:
        cursor.execute("DELETE FROM status WHERE username = ?",(username,))
        conn.commit()
        cursor.execute("INSERT INTO status (username, status) VALUES (?, ?)", (username, "offline",))
        conn.commit()
    elif type == 1:
        cursor.execute("DELETE FROM status WHERE username = ?",(username,))
        conn.commit()
        cursor.execute("INSERT INTO status (username, status) VALUES (?, ?)", (username, "online",))
        conn.commit()

def getStatus(username:str):
    cursor.execute(f"SELECT * FROM status WHERE username = '{username}'")
    status = cursor.fetchall()
    return status

# setStatus('smth', 0)
# cursor.execute("SELECT * FROM status")
# print(cursor.fetchall())

daStatus = None
if (sys.argv[1] == 'getStatus'):
    daStatus = getStatus(sys.argv[2])
else:
    setStatus(sys.argv[2], sys.argv[3])
    
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