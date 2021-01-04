# Find the Corrupt Pair Pattern: Cyclic Sort We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers. Input: [3, 1, 2, 5, 2] Output: [2, 4] Explanation: '2' is duplicated and '4' is missing. Input: [3, 1, 2, 3, 6, 4] Output: [3, 5] Explanation: '3' is duplicated and '5' is missing.


def duplicate(arr):
    i = 1
    for elmnt in arr:
        if elmnt in arr[i:]:
            return elmnt
        i += 1


def errNumber(arr):
    for i in range(1, len(arr)+1):
        if i not in arr:
            return i


arr = [3, 1, 2, 3, 6, 4]
print(duplicate(arr))
print(errNumber(arr))
