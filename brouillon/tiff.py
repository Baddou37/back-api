from PIL import Image

# Ouverture de l'image HEIC
im = Image.open('data/img.tiff')

    
# enregistrer l'image TIFF dans le repertoire convert
# im.save('convert/img.tiff', 'TIFF')

# Conversion en format JPEG
im.convert('RGB').save('convert/testTIFF.jpg', 'JPEG')