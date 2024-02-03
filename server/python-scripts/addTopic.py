import sqlite3
import os

os.chdir(r"C:\Users\nikrp\Documents\TutorSwift\server")
conn = sqlite3.connect("topics.db")

cursor = conn.cursor()
cursor.execute("""CREATE TABLE IF NOT EXISTS topics (topic TEXT, budget INT, name TEXT, username TEXT, profilePic TEXT)""")
conn.commit()

def addTopic(topic:str, budget:int, name:str, username:str, ppp:str):
    cursor.execute("INSERT INTO topics (topic, budget, name, username, profilePic) VALUES (?, ?, ?, ?, ?)", (topic, budget, name, username, ppp))
    conn.commit()

addTopic("mawth", 123, "jeffrey bezos", "jefboz")

