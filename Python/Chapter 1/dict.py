'''
Dict methods:
    myDict.keys():Prints the keys of dict
    myDict.values():return values of dict
    myDict.items():return keys,values of all the content
    myDict.update():Updates the dict by adding key value pair 
    myDict.get(key):

'''


myDict = {
    'fast': "In a Quick Manner",
    'chintu': "A coder",
    'marks': [1, 2, 5],
    'anotherDict': {'harry': 'porter'}
}

myDict.update({"chintu":"A Player"})
print(myDict.get("chint"))