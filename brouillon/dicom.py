import pydicom
import matplotlib.pyplot as plt

# Ouvrir un fichier DICOM
dcm = pydicom.dcmread('data/img.dcm')
image = dcm.pixel_array

# sauvegarder l'image DICOM avec Matplotlib
plt.imsave("convert/testDICOM.jpg", image, cmap=plt.cm.bone)