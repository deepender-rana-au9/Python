# basic
def twoSum(arr, target):
    for i in range(len(arr)-1):
        for j in range(i+1, len(arr)):
            if arr[i]+arr[j] == target:
                return [i, j]


# if sorted
def twoSum1(arr, target):
    if len(arr) == 1:
        return 0
    l = 0
    r = len(arr)-1
    while l < r:
        if arr[l]+arr[r] == target:
            return [l, r]
        elif arr[l]+arr[r] > target:
            r -= 1
        else:
            l += 1
    return "Nothing"


def twoSum2(arr, target):
    dic = {}
    for index, val in enumerate(arr):
        if target-val in dic:
            index1 = dic[target-val]
            return [index1, index]
        else:
            dic[val] = index


def twoSum3(arr, target):
    for i in range(len(arr)):
        num = target-arr[i]
        if num in arr and i != arr.index(num):
            return [i, arr.index(num)]


arr = [3, 2, 1, 4, 5, 19]
target = 20
print(twoSum(arr, target))
# print(twoSum1(arr, target))
print(twoSum2(arr, target))
print(twoSum3(arr, target))
