import sqlite3
import os

os.chdir(r"C:\Users\panda\hackathon\server")
conn = sqlite3.connect("topics.db")

cursor = conn.cursor()

# create a table
cursor.execute("""CREATE TABLE IF NOT EXISTS topics (topic TEXT, budget INT)""")
conn.commit()

def searchTopic(topic, budget):
    cursor.execute("INSERT INTO topics (topic, password, email, role) VALUES (?, ?)", (topic, budget ))
    conn.commit()

cursor.execute("SELECT * FROM topics")

print(cursor.fetchall())

searchTopic("billybobjoe1234", "bob1234", "bobbbybobbo", "tutor")

cursor.execute("SELECT * FROM topicxs")

print(cursor.fetchall())