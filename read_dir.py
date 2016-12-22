from os import listdir
from os.path import isfile, join

def readDir():
    mypath = "./_media"
    files = [f for f in listdir(mypath) if isfile(join(mypath, f))]
