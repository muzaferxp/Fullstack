#import my_module1

#from my_module1 import *

#from my_module1 import say_hello

from my_module1 import say_hello as sa

sa()

#=========================BUILT-IN MODULES===============
#1. DATETIME MODULE

import datetime

#current date time

date = datetime.datetime.now()

date = date.strftime("%x")

print(date)