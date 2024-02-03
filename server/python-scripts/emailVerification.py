#Importing modules
import random
import smtplib
from email.mime.text import MIMEText
import sys

#Verification Account Info
EMAIL = "syrupisgreatagain@gmail.com"
PASSWORD = "zhfmokmofebphdbl"

#Function to SMTPLib servers and email a verification code
def emailVerification(email:str):
    code = random.randrange(100000, 999999)
    
    # HTML formatting
    html_message = f"""
    <html>
    <head></head>
    <body style="width:100vw;padding-left: 10px; padding-right: 10px;">
        <h1 style="color:palegreen;">TutorSwift</h1>
        <p style="font-size: 14px;color:dodgerblue;font-weight:bold;">Below is your verification code for your TutorSwift account.</p>
        <h1 style="font-weight:bolder;letter-spacing:3px;font-size:25px;">{code}</h1>
    </body>
    </html>
    """
    msg = MIMEText(html_message, 'html')  # Set the message type to HTML
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
