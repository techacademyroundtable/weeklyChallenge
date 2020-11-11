import random, math

def play():

    #player will chose first
    choice = input("What's your choice? 'r' for rock, 'p' for paper, or 's' for scissors\n>>> ").lower()
    
    #computer will then be assigned a random choice
    computer = random.choice(['r','p','s'])
    
    if choice == computer:
        #print( "You both chose {}, it's a tie!".format(choice))
        return (0, choice, computer)
        
    if hasWon(computer, choice):
        return(1, choice, computer)
    else: return (-1, choice, computer)
    
def hasWon(computer, choice):
    #this function will be called to determine if the player has won
    if (choice == 'r' and computer == 's') or (choice == 'p' and computer == 'r') or (choice == 's' and computer == 'p'):
        return True
    else: return False

def bestOutOf():
    #this function will decides who wins based on number of games you've chosen to play
    player = input("what is your name? \n>>> ")
    print("Welcome {}, let's play Rock, Paper, Scissors!\n".format(player))
    n = int(input("Best out of how many games? \n>>> "))
    playerWins = 0
    compWins = 0
    winsToWin = math.ceil(n/2)
    while playerWins < winsToWin and compWins < winsToWin:
        result, choice, computer = play()
        if result == 0:
            print("You both chose {}, it's a tie!\n>>> ".format(choice))
        elif result == 1:
            print("You chose {}, the computer chose {}. You win!\n>>> ".format(choice, computer))
            playerWins += 1
        else:
            print("You chose {}, the computer chose {}. You lose!\n>>> ".format(choice, computer))
            compWins += 1

    if playerWins > compWins:
        print("Congrats! You won best {} out of {}!".format(playerWins, n))
    else: print("Oh no! The computer won best {} out of {} :(".format(compWins, n))
    

if __name__ == "__main__":
    bestOutOf()
