import sqlite3
import os

os.chdir(r"C:\Users\devpa\Desktop\TutorSwift-1\server")

conn = sqlite3.connect("topics.db")

cursor = conn.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS topics (topic TEXT, budget INT, name TEXT, username TEXT)""")
conn.commit()

def searchTopic(topic:str, budget:str):
    cursor.execute("SELECT * FROM topics WHERE topic = '{}' AND budget < {}".format(topic, budget))
    list = cursor.fetchall()
    return list
