userInp =int(input("Enter number of * in first line "))

for i in range(userInp+1):
    for j in range(i+1,userInp+1):
        print('*',end="")
    print()