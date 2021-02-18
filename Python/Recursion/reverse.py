# def reverse(str, s):
#     if s == len(str):
#         return
#     reverse(str, s+1)
#     print(str[s])


# str = 'deepender'


# reverse(str, 0)

def reverse(str):
    if str == "":
        return
    reverse(str[1:])
    print(str[0])


str = "abcdef"
reverse(str)
