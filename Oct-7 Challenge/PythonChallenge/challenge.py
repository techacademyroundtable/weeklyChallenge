#You work for a manufacturer,
#and have been asked to calculate
#the total profit made on the
#sales of a product. You are given
#a dictionary containing the cost
#price per unit (in dollars),
#sell price per unit (in dollars),
#and the starting inventory.
#Return the total profit made, rounded to the nearest dollar.

def Profit(cost,sell,total):
    trueCost = (sell - cost)
    totalProfit = (trueCost * total)
    print(totalProfit)

Profit(3.15, 10.50, 5000)
