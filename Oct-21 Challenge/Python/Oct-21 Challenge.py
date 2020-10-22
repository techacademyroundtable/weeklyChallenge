#Write a function that takes a string
#as argument and returns the number
#of vowels contained in that string.

def numOfVowels(text):
    
    vowels = ['a','e','i','o','u','A','E','I','O','U']
    count = 0
    for  char in text:
        if char in vowels:
            count += 1
    print(count)        


numOfVowels('hellooooooo')

            
