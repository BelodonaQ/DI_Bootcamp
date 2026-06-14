# Exercise 1: Add Two Numbers
def add_two_numbers(num1, num2):
    return num1 + num2


print(add_two_numbers(3, 5))      # Output: 8
print(add_two_numbers(10, 20))    # Output: 30


# Exercise 2: Print a Greeting
def greet(name):
    print(f"Hello, {name}!")


greet("Alice")    # Output: Hello, Alice!
greet("Bob")      # Output: Hello, Bob!


# Exercise 3: Check if Number is Even or Odd
def check_even_odd(number):
    if number % 2 == 0:
        print("Even")
    else:
        print("Odd")


check_even_odd(4)    # Output: Even
check_even_odd(7)    # Output: Odd


# Exercise 4: Sum of Numbers in a List
def sum_list(numbers):
    total = 0

    for number in numbers:
        total += number

    return total


print(sum_list([1, 2, 3, 4]))    # Output: 10
print(sum_list([5, 5, 5]))       # Output: 15


# Exercise 5: Print Days of the Week
def print_days():
    days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    for day in days:
        print(day)


print_days()


# Exercise 6: Check if Number is Positive, Negative, or Zero
def check_sign(number):
    if number > 0:
        print("Positive")
    elif number < 0:
        print("Negative")
    else:
        print("Zero")


check_sign(10)    # Output: Positive
check_sign(-5)    # Output: Negative
check_sign(0)     # Output: Zero


# Exercise 7: Repeat a Word
def repeat_word(word, number):
    for i in range(number):
        print(word)


repeat_word("hello", 3)
repeat_word("goodbye", 2)