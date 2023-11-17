from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .functions.email import *
from .functions.sheets import insertRow

mainEmail = "spaceexplorationraiders@gmail.com"

TEMPLATE_DIRS = (
    'os.path.join(BASE_DIR, "templates"),'
)

#----------------Pages----------------
def index(request):
    return render(request, "index.html",)

def team(request):
    return render(request, "team.html",)

def sponsor(request):
    return render(request, "sponsor.html",)

def contact(request):
    if request.method == 'GET':
        return render(request, "contact.html",)
    else:
        firstName = request.POST.get('FirstName')
        lastName = request.POST.get('LastName')
        email = request.POST.get('Email')
        subject= request.POST.get('Subject')
        message= request.POST.get('Message')

        try:
            message = contactFormat(firstName, lastName, email, subject, message)
            emailMessage("SER Contact Form: ", firstName, lastName, message, 'ser@website.admin', mainEmail)
            # print(message)
            success = 1
        except Exception as e:
            print(e)
            success = 0
        
        return redirect(f"/contact/?success={success}")

def join(request):
    if request.method == 'GET':
        return render(request, "join.html",)
    else:
        firstName = request.POST.get('FirstName')
        lastName = request.POST.get('LastName')
        email = request.POST.get('Email')
        phoneNumber= request.POST.get('PhoneNumber')
        major= request.POST.get('Major')
        graduation = request.POST.get('Graduation')
        dob = request.POST.get('DOB')
        city = request.POST.get('City')
        shirtSize = request.POST.get('ShirtSize')

        try:
            insertRow(firstName,lastName, email, phoneNumber, major, graduation, dob, city, shirtSize)
            message = formatMessage(firstName, lastName,)
            emailMessage("New Member Request: ",firstName, lastName, message, 'ser@website.admin', mainEmail)
            # print(message)
            success = 1
        except Exception as e:
            print(e)
            success = 0
        
        return redirect(f"/join/?success={success}")
    

def privacy(request):
    return render(request, "privacy.html",)

def terms(request):
    return render(request, "terms.html",)