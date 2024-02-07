import sqlite3
import os

os.chdir(r"C:\Users\nikrp\Documents\TutorSwift\server")
conn = sqlite3.connect("about.db")

cursor = conn.cursor()
cursor.execute("""CREATE TABLE IF NOT EXISTS about (info TEXT, about TEXT, education TEXT, name TEXT, username TEXT)""")
conn.commit()

def addInfo(timezone:str, info:str, about:str, topic:str, education:str, name:str, username:str):
    cursor.execute("INSERT INTO about (timezone, info, about, topic, education, name, username) VALUES (?, ?, ?, ?, ?, ?, ?)", (timezone, info, about, topic, education, name, username, ))
    conn.commit()




#get b9irthday
#location.
#add photo
#add lessons
#add topics
#qualification
#who want teach / proficiency
#Lessons and pricing
#add profile url
