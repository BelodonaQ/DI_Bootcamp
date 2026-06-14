def find_largest(numbers):
    largest = numbers[0]

    for number in numbers:
        if number > largest:
            largest = number

    return largest


print(find_largest([1, 2, 3, 4]))
print(find_largest([10, 20, 5]))


def check_letter(word, letter):
    if letter in word:
        return True
    else:
        return False


print(check_letter("apple", "a"))
print(check_letter("banana", "z"))


def count_to_number(number):
    for num in range(1, number + 1):
        print(num)


count_to_number(3)
count_to_number(5)