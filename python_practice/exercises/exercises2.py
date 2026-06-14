# Exercise 1: Return the Largest Number
def find_largest(numbers):
    largest = numbers[0]

    for number in numbers:
        if number > largest:
            largest = number

    return largest


print(find_largest([1, 2, 3, 4]))      # Output: 4
print(find_largest([10, 20, 5]))       # Output: 20


# Exercise 2: Check for Letter in Word
def check_letter(word, letter):
    if letter in word:
        return True
    else:
        return False


print(check_letter("apple", "a"))      # Output: True
print(check_letter("banana", "z"))     # Output: False


# Exercise 3: Count to a Number
def count_to_number(number):
    for current_number in range(1, number + 1):
        print(current_number)


count_to_number(3)
# Output:
# 1
# 2
# 3

count_to_number(5)
# Output:
# 1
# 2
# 3
# 4
# 5