'''
sum of multiple of 3 and 5
'''

# basic approach


def sumOfMultiple(n):
    sum = 0
    for i in range(1, n+1):
        if i % 3 == 0 and i % 5 == 0:
            sum += i
    return sum


print(sumOfMultiple(50))
