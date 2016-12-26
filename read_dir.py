from os import listdir
from os.path import isfile, join
import json

class CollectImagePaths(object):
    def readDir(self):
        dir_path = "./_media"
        self.image_files = [file for file in listdir(dir_path) if isfile(join(dir_path, file))]
        return self.image_files

    def makeJson(self):
        data = {}
        for index, item in enumerate(self.image_files):
            data[index] = item
        with open('carousel_images.json', 'w+') as self.outfile:
            json.dump(data, self.outfile)

    def execAll(self):
        get_files = self.readDir()
        self.makeJson()

starterUp = CollectImagePaths()
starterUp.execAll()