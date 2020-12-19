def insetion(arr):
    n = len(arr)

    for i in range(n):
        j = i+1  # max element in left sorted list
        x = i  # index pick

        while j >= 0:
            if arr[j] > arr[x]:
                arr[j+1] = arr[j]
            else:
                break

            j -= 1
