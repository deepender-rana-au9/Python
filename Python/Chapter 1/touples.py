'''
Touples Methods
    t.count(value):return number of occurence of value
    t.index(value):return the index of value


'''

t = (1,)
for i in t:
    print(i, end="   ")

a = (7, 0, 8, 0, 0, 9)
print(a.count(0))
count = 0
for i in a:
    if i == 0:
        count += 1
print(count)
