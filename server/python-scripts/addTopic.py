import sqlite3
import os

os.chdir(r"C:\Users\panda\tutorswift-1\server")
conn = sqlite3.connect("topics.db")

cursor = conn.cursor()
cursor.execute("""CREATE TABLE IF NOT EXISTS topics (topic TEXT, budget INT, name TEXT, username TEXT)""")
conn.commit()

def addTopic(topic, budget, name, id):
    cursor.execute("INSERT INTO topics (topic, budget, name, username) VALUES (?, ?, ?, ?)", (topic, budget, name, id, ))
    conn.commit()