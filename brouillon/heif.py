from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()



# Ouverture de l'image HEIC
im = Image.open('data/img.heic')

   
# Conversion en format JPEG
im.convert('RGB').save('convert/testHEIC.jpg', 'JPEG')


