from django.apps import AppConfig


class EyeqConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'EyeQ'
    def ready(self):
        import EyeQ.signals