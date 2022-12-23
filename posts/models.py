from django.db import models
from tinymce import models as tinymce_models

class Post(models.Model):
    title = models.TextField(max_length=100)
    text = tinymce_models.HTMLField()
    img = models.ImageField(blank=True, null=True)
    
    def __str__(self):
        return self.title
    