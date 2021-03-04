'''
In the amusement park at Looney’s amusement, there is a “Weighted Maze” challenge. This consists of a set of East West roads (referred to as left to right roads) and North South roads (referred to as up down roads). Each intersection has a block of iron bar, the weight of which is given. You enter the maze at the top left corner with 1 kg in a cart. The exit from the maze is at the bottom right corner. Movement at any intersection is to the right or down provided a road exists in that direction.
At each intersection you pass through, you must exchange the weight in your cart with the weight of the bar at the intersection if it is heavier than the weight you have in the cart.
The objective is to determine a path through the maze along the roads so that one can exit the maze with the minimum weight in the cart.
'''
grid = [[1, 8, 21, 7],
        [19, 17, 10, 20],
        [2, 18, 23, 22],
        [14, 25, 4, 13]
        ]


m = len(grid)  # row 3
n = len(grid[0])  # column 3


result = [[0 for x in range(n)] for x in range(m)]
# [
# [0,0,0]
# [0,0,0]
# [0,0,0]
# ]

result[0][0] = grid[0][0]

for j in range(1, n):  # 1,2
    result[0][j] = max(result[0][j-1], grid[0][j])
for i in range(1, m):  # 1,2
    result[i][0] = max(grid[i][0], result[i-1][0])

for i in range(1, m):
    for j in range(1, n):
        x = min(result[i-1][j], result[i][j-1])
        result[i][j] = max(grid[i][j], x)

print(result)
print(result[m-1][n-1])
