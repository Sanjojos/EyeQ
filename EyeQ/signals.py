from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from .models import booking

@receiver(post_save, sender=booking)
def send_booking_email(sender, instance, created, **kwargs):
    if created:
        subject = "Appointment Confirmation"
        message = f"Dear {instance.fname},\n\nYour appointment has been successfully booked.We will contact you regarding consultation time\n\nSymptoms: {instance.Symptoms}\n\nThank you for choosing our clinic. We look forward to seeing you!"
        from_email = "your_email@gmail.com"
        recipient_list = [instance.emails]  

        send_mail(subject, message, from_email, recipient_list)
