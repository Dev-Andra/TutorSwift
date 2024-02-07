import sqlite3
import os
import profilePicture

os.chdir(r"C:\Users\devpa\Desktop\TutorSwift-1\server")
conn = sqlite3.connect("topics.db")

cursor = conn.cursor()
cursor.execute("""CREATE TABLE IF NOT EXISTS topics (topic TEXT, budget INT, name TEXT, username TEXT, profilePic TEXT)""")
conn.commit()

def addTopic(topic:str, budget:int, name:str, username:str):
    ppp = profilePicture.findPic(username)
    cursor.execute("INSERT INTO topics (topic, budget, name, username, profilePic) VALUES (?, ?, ?, ?, ?)", (topic, budget, name, username, ppp[0][0] + "." + ppp[0][1]))
    conn.commit()

