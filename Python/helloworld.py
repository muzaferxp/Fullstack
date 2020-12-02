print("Hello World!")

#===========COMMENT=============
#print('Hello World!')

a = 10

b = "ABC"

#=====
#it should not be a number in the beginning
#it should not be a predefined key word (print, def, if, else)
#_ special character can be used in the beginning
#numbers can be included in middle or ending of the variable name

typeof_a = type(a)

print(typeof_a)
print(type(b))

#arithmatic

x = 5
y = 10

z = x + y

z = 2 ** 4
print(z)


#=====================DATA TYPES====================
#1 NUMERIC data type (number)

a = 10

print(type(a))
#1.2 Floa data type (decimal)

a = 10.075

print(type(a))

#2 Dict data type 

data = {
    "key1" : "value1",
    "key2" : "value2"
}

print(data)
print(data["key1"])

#3 BOOLEAN
#1) True
#2) False

a = True
b = False

#4 SET data type

data = {1 , 2 , 3 , "hello"}

print(data)

#5 STRING DATA TYPE
name = "Adam"
print(name)

#5.2 LIST DATA TYPE

data = [1,0,5,"String"]

#5.3 TUPLE DATA TYPE

tuple_Data = (1, "a", 'b', [1,2], data)

#======================LOOPS==============
#1 FOR LOOP on LIST
data = [1,2,3,4,5]

for element in data:
    print(element)


print("LOOPS ON STRING")
#for loop on string
a = "Hello world!"
for x in a:
    print(x)

print("LOOPS ON DICT")
data = {
    "key1" : "value1",
    "key2" : "value2"
}


for x in data:
    print(x)
    print(data[x])

print("FOR LOOP IN RANGE")
for x in range(10):
    print("Hello")
    print(x)

print("PRINTING PATTERNS")

y = 20
for x in range(20):
    print( "_" * y + "|" * x * 2  + "_" * y)
    y -= 1



print("WHILE LOOP")
y = 0
while y < 5: #(condition x < 5)
    print(y)
    y = y + 1




