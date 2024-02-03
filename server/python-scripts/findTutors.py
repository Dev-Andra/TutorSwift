import sqlite3
import os

os.chdir(r"C:\Users\nikrp\Documents\TutorSwift\server")

conn = sqlite3.connect("topics.db")

cursor = conn.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS topics (topic TEXT, budget INT, name TEXT, username TEXT)""")
conn.commit()

def findTutors():
    cursor.execute("SELECT * FROM topics")
    tutors = cursor.fetchall()
    return tutors

tutors_array = findTutors()
print([list(row) for row in tutors_array])
