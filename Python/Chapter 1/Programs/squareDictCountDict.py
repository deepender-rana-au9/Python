
# Write a Python script to generate and print a dictionary that contains a number (between 1 and n) in the form (x, x*x).
# Write a Python program to create a dictionary from a string. Note: Track the count of the letters from the string. Sample string : 'w3resource' Expected output: {'3': 1, 's': 1, 'r': 2, 'u': 1, 'w': 1, 'c': 1, 'e': 2, 'o': 1}


def square(n):
    a = {}
    for i in range(1, n+1):
        a[i] = i * i

    return a


def cnt(st):
    a = {}
    for i in range(len(st)):
        ct = st.count(st[i])
        a[st[i]] = ct
    return a


n = 10
print(square(n))

st = "w3resoursu"
print(cnt(st))
