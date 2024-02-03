import sqlite3
import os

os.chdir(r"C:\Users\devpa\Desktop\TutorSwift-1\server")
conn = sqlite3.connect("status.db")

cursor = conn.cursor()
cursor.execute("""CREATE TABLE IF NOT EXISTS status (username TEXT, status TEXT)""")
conn.commit ()

def setStatus(username:str, type:str):
    cursor.execute("SELECT * FROM status WHERE username = '{}'".format(username, ))
    status = cursor.fetchall()
    if status == []:
        cursor.execute("INSERT INTO status (username, status) VALUES (?, ?)", (username, "offline",))
    if type == 0:
        cursor.execute("DELETE FROM status WHERE username = ?",(username,))
        cursor.execute("INSERT INTO status (username, status) VALUES (?, ?)", (username, "offline",))
    elif type == 1:
        cursor.execute("DELETE FROM status WHERE username = ?",(username,))
        cursor.execute("INSERT INTO status (username, status) VALUES (?, ?)", (username, "online",))


def getStatus(username:str):
    cursor.execute("SELECT * FROM status WHERE username = '{}'".format(username, ))
    status = cursor.fetchall()
    return status




#get b9irthday
#location.
#add photo
#add lessons
#add topics
#qualification
#who want teach / proficiency
#Lessons and pricing
#add profile url