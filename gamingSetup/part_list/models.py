from django.db import models

class Part(models.Model):
    item = models.CharField(max_length = 100)
    price = models.DecimalField(decimal_places = 2, max_digits = 15)
    link = models.URLField()
    img_link = models.URLField()
    
    def __str__(self):
        return self.item