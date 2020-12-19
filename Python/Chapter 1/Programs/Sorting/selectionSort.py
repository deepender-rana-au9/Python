a = [1, 2, 4, 3, 6, 4]
n = len(a)

for i in range(n):
    min_elm_idx = i

    for j in range(i+1, n):
        if a[min_elm_idx] > a[j]:
            min_elm_idx = j
    a[i],a[min_elm_idx]=a[min_elm_idx],a[i]

print(a)