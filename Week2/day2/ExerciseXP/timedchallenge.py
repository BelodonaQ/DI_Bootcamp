# Write a program which takes a string and a character as an input, and finds out the number of occurrences the character has in the string.


user_input = input("Place you sentence here")
char = input("Enter a letter")

count = 0

for letter in user_input:
    if letter == char:
      count += 1
  
print("the character appears", count, "times")

