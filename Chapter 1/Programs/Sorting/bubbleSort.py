a = [1, 2, 14, 122, 6, 4]
n = len(a)

for i in range(n-1):
    for j in range(n-i-1):
        if a[j]>a[j+1]:
            a[j],a[j+1]=a[j+1],a[j]

print(a)