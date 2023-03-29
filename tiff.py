from PIL import Image



# Ouverture de l'image HEIC
with Image.open('data/img.tiff') as im:
    
    # enregistrer l'image TIFF dans le repertoire convert
    im.save('convert/img.tiff', 'TIFF')
    
    # Conversion en format JPEG
    im.convert('RGB').save('convert/testTIFF.jpg', 'JPEG')
    im.convert('RGB').save('convert/testTIFF.png', 'PNG')
    im.convert('RGB').save('convert/testTIFF.webp', 'WEBP')
    im.convert('RGB').save('convert/testTIFF.bmp', 'BMP')
    im.convert('RGB').save('convert/testTIFF.gif', 'GIF')
    im.convert('RGB').save('convert/testTIFF.pdf', 'PDF')