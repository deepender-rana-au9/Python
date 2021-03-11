# Simple way to get substrings without recursion

# def subStrings(string):
#     print("")
#     for i in range(len(string)):
#         for j in range(i, len(string)):
#             print(string[i:j+1])


# string = input("Enter a string ")
# subStrings(string)


# With recursion
def subStrings(string, res, idx):
    if idx == len(string):
        print(res)
        return
    subStrings(string, res + string[idx], idx+1)  # Adding a character
    subStrings(string, res, idx+1)  # Skipping a character


string = input("Enter a string ")
res = ""
idx = 0
subStrings(string, res, idx)
