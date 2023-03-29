from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

# Ouverture de l'image HEIC
with Image.open('data/img.heic') as im:
    
    # enregistrer l'image HEIC dans le repertoire convert
    im.save('convert/img.heic', 'HEIC')
    
    # Conversion en format JPEG
    im.convert('RGB').save('convert/testHEIC.jpg', 'JPEG')
    im.convert('RGB').save('convert/testHEIC.png', 'PNG')
    im.convert('RGB').save('convert/testHEIC.webp', 'WEBP')
    im.convert('RGB').save('convert/testHEIC.tiff', 'TIFF')
    im.convert('RGB').save('convert/testHEIC.bmp', 'BMP')
    im.convert('RGB').save('convert/testHEIC.gif', 'GIF')
    im.convert('RGB').save('convert/testHEIC.pdf', 'PDF')


