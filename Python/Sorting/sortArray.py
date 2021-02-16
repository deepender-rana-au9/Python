# Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.
# Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1} Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} Time Complexity: O(n)


def sortArray(arr, n):
    listOfZeros = []
    listOfOnes = []
    listOfTwos = []
    for i in range(0, n):
        if arr[i] == 0:
            listOfZeros.append(0)
        elif arr[i] == 1:
            listOfOnes.append(1)
        else:
            listOfTwos.append(2)
    sortedList = listOfZeros + listOfOnes + listOfTwos

    return sortedList


arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
n = len(arr)
print(sortArray(arr, n))
