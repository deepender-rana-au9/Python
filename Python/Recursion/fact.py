# Simple factorial solution

def fact(number):
    factorial = number
    if number == 0:
        return 1
    for i in range(number-1, 0, -1):
        factorial = factorial*i
    return factorial


# factorial with reccursion

# def fact(n):
#     if n == 1 or n == 0:
#         return 1
#     else:
#         return n*fact(n-1)


print(fact(4))
