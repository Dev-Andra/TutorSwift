import sqlite3
import os

os.chdir(r"D:\nik-documents\github\TutorSwift\server")
conn = sqlite3.connect("topics.db")

cursor = conn.cursor()

# create a table
cursor.execute("""CREATE TABLE IF NOT EXISTS topics (topic TEXT, budget INT, name TEXT, id TEXT)""")
conn.commit()

def searchTopic(topic, budget):
    cursor.execute("SELECT * FROM topics WHERE topic = 'math' AND budget < 50")
    list = cursor.fetchall()
    return list

# cursor.execute("SELECT * FROM topics")

# print(cursor.fetchall())

results = searchTopic("math", 50)
print(results)

# cursor.execute("SELECT * FROM topics")

# print(cursor.fetchall())

# cursor.executemany("INSERT INTO topics (topic, budget, name) VALUES (?, ?, ?)", [("math", 15.99, "jimmy"), ("math", 80, "bob"), ("math", 20, "hello"), ("language arts", 10, "somebody")])
# conn.commit()
