import os

def ok(file=__file__):
    print(os.path.dirname(os.path.abspath(file)))