#Snake water gun game

import random

#game function which is getting compter choice and user choice as parameters
def game(c, u):
    if c == u:
        return None
    elif c == 'S':
        if u == 'W':
            return False
        elif u == 'G':
            return True

    elif c == 'W':
        if u == 'G':
            return False
        elif u == 'S':
            return True

    elif c == 'G':
        if u == 'S':
            return False
        elif u == 'W':
            return True


print("Computer turn !Snake(S) Water(W) or Gun(G)....choosing")
rand_com = random.randint(1, 3)
if rand_com == 1:
    comp_choice = 'S'
elif rand_com == 2:
    comp_choice = 'W'
else:
    comp_choice = 'G'

user_choice = input(
    "Your's turn Please choose from Snake(S) Water(W) or Gun(G)  ")
print("Computer choose", comp_choice)
print("You choose", user_choice)

output = game(comp_choice, user_choice)
if output == None:
    print('Match Tied')
elif output:
    print("Congratulations !! You Win...")
else:
    print("Better luck next time!!")
