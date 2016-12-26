from os import listdir
from os.path import isfile, join
import json

class CollectImagePaths(object):
    def readDir(self):
        dir_path = "./_media"
        self.image_files = [file for file in listdir(dir_path) if isfile(join(dir_path, file))]
        return self.image_files

    def makeJson(self):
        data = self.image_files
        with open('data.txt', 'w+') as self.outfile:
            json.dump(data, self.outfile)

    def execAll(self):
        get_files = self.readDir()
        self.makeJson()

starterUp = CollectImagePaths()
starterUp.execAll()