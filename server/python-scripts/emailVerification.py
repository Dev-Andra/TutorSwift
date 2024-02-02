#Importing modules
import random
import smtplib
from email.mime.text import MIMEText
import sys

#Verification Account Info
EMAIL = "syrupisgreatagain@gmail.com"
PASSWORD = "zhfmokmofebphdbl"

#Function to SMPTLib servers and email a verification code
def emailVerification(email:str):
    code = random.randrange(100000, 999999)
    msg = MIMEText(str(code))
    msg["Subject"] = "Verify your TutorSwift email address"
    msg["From"] = EMAIL
    msg['To'] = email
    s = smtplib.SMTP('smtp.gmail.com', 587)
    s.starttls()
    s.login(EMAIL, PASSWORD)
    s.sendmail(EMAIL, email, msg.as_string())
    s.quit()
    return code

code = emailVerification(sys.argv[1])

print(code)
