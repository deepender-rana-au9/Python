'''
sum of n natural numbers
'''
# complexity o(n)
import time


def sum(n):
    sum = 0
    for i in range(1, n+1):
        sum += i
    return sum

# complexity o(1)


def sum2(n):
    sum = n*(n+1)//2
    return sum


time1 = time.time()
print(sum(20))
time2 = time.time()
print(sum2(20))
time3 = time.time()
print(time2-time1)
print(time3-time2)
