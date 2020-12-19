# Rotate an array with k values

a = [1, 2, 3, 4, 5]
k = 2

b = []

b = a[k:]+a[:k]
print(b)
