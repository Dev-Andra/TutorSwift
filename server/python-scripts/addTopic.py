import sqlite3
import os

os.chdir(r"C:\Users\devpa\Desktop\TutorSwift-1\server")
conn = sqlite3.connect("topics.db")

cursor = conn.cursor()
cursor.execute("""CREATE TABLE IF NOT EXISTS topics (topic TEXT, budget INT, name TEXT, username TEXT)""")
conn.commit()

def addTopic(topic:str, budget:int, name:str, username:str):
    cursor.execute("INSERT INTO topics (topic, budget, name, username) VALUES (?, ?, ?, ?)", (topic, budget, name, username, ))
    conn.commit()
    return 200

addTopic("Valorant Coaching", 30, "Tenz", "SenTenz")

