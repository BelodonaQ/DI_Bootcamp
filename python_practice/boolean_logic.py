# 1. Declare a variable called first and assign it to "Hello World"
first = "Hello World"

# 2. This is a comment.

# 3. Log a message to the terminal
print("I AM A COMPUTER!")

# 4. If statement checking two conditions
if 1 < 2 and 4 > 2:
    print("Math is fun.")

# 5. Assign a variable called nope to an absence of value
nope = None

# 6. Use Python's "and" boolean operator
boolean_result = True and False
print(boolean_result)  # False

# 7. Calculate the length of the string
length = len("What's my length?")
print(length)  # 17

# 8. Convert the string to uppercase
shouting = "i am shouting".upper()
print(shouting)  # I AM SHOUTING

# 9. Convert the string "1000" to the number 1000
number = int("1000")
print(number)  # 1000

# 10. Combine the number 4 with the string "real" to produce "4real"
combined = str(4) + "real"
print(combined)  # 4real

# 11. Record the output of 3 * "cool"
cool_result = 3 * "cool"
print(cool_result)  # coolcoolcool

# 12. Record the output of 1 / 0
# 1 / 0 causes a ZeroDivisionError.
# Python does not allow division by zero.

# 13. Determine the type of []
empty_list_type = type([])
print(empty_list_type)  # <class 'list'>

# 14. Ask the user for their name
name = input("What is your name? ")

# 15. Ask the user for a number and check if it is negative, positive, or zero
user_number = float(input("Pick a number: "))

if user_number < 0:
    print("That number is less than 0!")
elif user_number > 0:
    print("That number is greater than 0!")
else:
    print("You picked 0!")

# 16. Find the index of "l" in "apple"
index_of_l = "apple".index("l")
print(index_of_l)  # 3

# 17. Check whether "y" is in "xylophone"
has_y = "y" in "xylophone"
print(has_y)  # True

# 18. Check whether a string called my_string is all lowercase
my_string = "hello world"
is_lowercase = my_string.islower()
print(is_lowercase)  # True