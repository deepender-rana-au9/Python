def sum(n):
    if n==2:
        return 3
    else:
        return n+sum(n-1)


print(sum(6))