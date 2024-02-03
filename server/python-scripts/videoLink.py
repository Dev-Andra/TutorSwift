import base64
import random

def generateLink(name:str):
    beforeEncoded = random.randrange(100000000, 999999999)
    beforeEncoded = name + "-" + str(beforeEncoded)
    encodedData = str(base64.b64encode(bytes(beforeEncoded, 'utf8')))
    encodedData = encodedData.replace("'", "")
    encodedData = encodedData.replace("=", "")
    meetingLink = "https://meet.jit.si/tutor-swift-{}".format(encodedData)
    return (meetingLink)
