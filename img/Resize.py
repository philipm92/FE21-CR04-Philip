import os
import sys
import time
from Common import TimeToString
from PIL import Image

starttime = time.time()
nx = int(input("Please enter the new width in pixels: ") or "1920")
ny = int(input("Please enter the new height in pixels: ") or "1280")
def Resize(file, quality_val=85):
	picture = Image.open(file, "r")
	#picture.resize((nx, ny), Image.LANCZOS).save(file.replace(".jpg", f"_{nx}.jpg"), "JPEG", quality = quality_val)
	picture.resize((nx, ny), Image.LANCZOS).save(file.replace(".jpg", f"_new.jpg"), "JPEG", quality = quality_val)
	return True

print(f"Start resizing images to {nx}x{ny}...")

for file in os.listdir(os.getcwd()):
        print(f"Resizing {file}")
        if ("_" in file): Resize(file)
        
print("...")
print("...")
print("Done!!!")
print(TimeToString(time.time()-starttime))
