# Simple way to get sunstrings without recursion

# def subStrings(string):
#     for i in range(len(string)):
#         for j in range(i, len(string)):
#             print(string[i:j+1])


# string = input("Enter a string ")
# subStrings(string)


# With recursion
def subStrings(string, res, idx):
    if idx > len(string):
        print(res)
        return
    subStrings(string, res + string[:idx], idx+1)
    subStrings(string, res, idx+1)


string = input("Enter a string ")
res = []
idx = 0
subStrings(string, res, idx)
