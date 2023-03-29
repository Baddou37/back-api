import pydicom
import matplotlib.pyplot as plt

# Ouvrir un fichier DICOM
dcm = pydicom.dcmread('data/img.dcm')
image = dcm.pixel_array
# enregistrer l'image DICOM dans le repertoire convert
dcm.save_as("convert/testDICOM.dcm")

#ouvrir un fichier TIFF

# enregistrer l'image TIFF dans le repertoire convert


# renvoyer l'image DICOM sous forme de tableau numpy
# print(image)
# print("Fichier converti avec succès !")

# sauvegarder l'image DICOM avec Matplotlib
plt.imsave("convert/testDICOM.webp", image, cmap=plt.cm.bone)
plt.imsave("convert/testDICOM.png", image, cmap=plt.cm.bone)
plt.imsave("convert/testDICOM.jpg", image, cmap=plt.cm.bone)
plt.imsave("convert/testDICOM.tiff", image, cmap=plt.cm.bone)
plt.imsave("convert/testDICOM.bmp", image, cmap=plt.cm.bone)
plt.imsave("convert/testDICOM.gif", image, cmap=plt.cm.bone)
plt.imsave("convert/testDICOM.pdf", image, cmap=plt.cm.bone)



# # Afficher l'image DICOM avec Matplotlib
# plt.imshow(image, cmap=plt.cm.bone)
# plt.show()