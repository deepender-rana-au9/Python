def chocolateDistribution(n):
    sum = 2
    for i in range(0, n):
        sum = sum * 2

    return sum


print(chocolateDistribution(5))
