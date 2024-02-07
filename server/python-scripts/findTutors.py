import sqlite3
import os

os.chdir(r"C:\Users\devpa\Desktop\TutorSwift-1\server")

conn = sqlite3.connect("topics.db")

cursor = conn.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS topics (topic TEXT, budget INT, name TEXT, username TEXT, profilePic TEXT)""")
conn.commit()

def findTutors():
    cursor.execute("SELECT * FROM topics")
    tutors = cursor.fetchall()
    return tutors

tutors_array = findTutors()
print(tutors_array)
