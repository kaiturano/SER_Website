from django.core.mail import send_mail
from datetime import datetime

def emailMessage(subject, firstName, lastName, message, fromEmail, toEmail):
    if message:
        send_mail(
            subject + firstName + lastName,
            message,
            fromEmail, # Send email from
            [toEmail], # Send email to
            # fail_silently=False, # We don't want it to fail silently that way it raises an error
        )
    else:
        raise Exception

def emailMessageContact(subject, name, message, fromEmail, toEmail):
    if message:
        send_mail(
            subject + name,
            message,
            fromEmail, # Send email from
            [toEmail], # Send email to
            # fail_silently=False, # We don't want it to fail silently that way it raises an error
        )
    else:
        raise Exception

def formatMessage(FirstName, LastName):
    '''
    Used to format the message how ever you want.\n
    Returns the full message to send in the email.
    '''
    if FirstName and LastName:
        day_of_week, date = emailDate()
        
        fullMessage = (
            f'This message is from {FirstName} {LastName} on {day_of_week}, {date} at '  # Date and time information
            f'{datetime.now().strftime("%I")}:{datetime.now().strftime("%M")} '  # Hour and minute
            f'{datetime.now().strftime("%p")}:\n\n"A new member would like to join SER!"'  # AM or PM and message
        )

        return fullMessage
    
    else:
        return False
    
def emailLink(email, subject):
    email_link = f'<a href="mailto:{email}?subject=RE: {subject}">{email}</a>' # Makes a clickable link in the email
    return email_link

    
def emailDate():
    day_of_week = datetime.now().strftime('%A') # Full day name (e.g., "Monday")
    date = datetime.now().strftime('%m/%d/%Y') # In the format MM/DD/YYYY

    return day_of_week, date

    
def contactFormat(Name, Email,Subject, Message):
    if Name and Email and Message:
        day_of_week, date = emailDate()
        email_link = emailLink(Email, Subject)

        
        fullMessage = (
            f'This message is from {Name} on {day_of_week}, {date} at '  # Date and time information
            f'{datetime.now().strftime("%I")}:{datetime.now().strftime("%M")} '  # Hour and minute
            f'{datetime.now().strftime("%p")}:\n\n{Message}\n\n\To respond,'  # AM or PM and message
            f'email back at {email_link}'
        )

        return fullMessage
    
    else:
        return False