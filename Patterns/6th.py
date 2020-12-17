'''Pattern:

           1 

         1 2 

      1 2 3 

   1 2 3 4 

 1 2 3 4 5
 '''


rows = 6

for row in range(1, rows):
    num = 1
    for j in range(rows, 0, -1):
        if j > row:
            print(" ", end=' ')
        else:
            print(num, end=' ')
            num += 1
    print("")
