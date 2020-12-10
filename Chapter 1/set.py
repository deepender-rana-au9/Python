'''
1 Cannot add dict or list in set
2 sets are unoredered and undexed
3 no way to change items in sets
4 sets cannot cotain duplicate values

Set methods
    a.add(item):to add item in set
    len(set):returns length of set
    a.remove(item):to remove item from set
    a.pop():Remove an arbitary element from set and return the element removed
    a.clear():clears the set
    a.union(anotherSet):return the union of two sets
    a.intersection(anotherSet):return the intersection of two sets

'''

#s=set()
#s.add(20.0)
#s.add('20')
#s.add(20)
#print(s)


username=input("Enter username ")
a=len(username)
print(a)
if len(username)<11:
    print("Yes")
else:
    print("No")
