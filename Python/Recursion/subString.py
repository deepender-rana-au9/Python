# Simple way to get sunstrings without recursion

def subStrings(string):
    for i in range(len(string)):
        for j in range(i, len(string)):
            print(string[i:j+1])


string = input("Enter a string ")
subStrings(string)
