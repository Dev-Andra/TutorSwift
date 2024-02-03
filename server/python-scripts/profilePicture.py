import sqlite3
import os
import base64

os.chdir(r"C:\Users\devpa\Desktop\TutorSwift-1\server")
conn = sqlite3.connect("picture.db")

cursor = conn.cursor()
cursor.execute("""CREATE TABLE IF NOT EXISTS pictures (name TEXT, type TEXT)""")
conn.commit()

def addPic(name:str, extension:str):
    cursor.execute("INSERT INTO pictures (name, type) VALUES (?, ?)", (name, extension))
    conn.commit()
    return 200

def findPic(name:str):
    cursor.execute("SELECT * FROM pictures WHERE name = '{}'".format(name, ))
    list = cursor.fetchall()
    return list

print(findPic('jefboz'))