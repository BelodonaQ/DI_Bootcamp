numbers = [1, 2, 3, 4]

for num in numbers:
    print(num)


numbers = [1, 2, 3, 4]

for num in numbers:
    print(num * 20)


names = ["Elie", "Tim", "Matt"]

first_letters = []

for name in names:
    first_letters.append(name[0])

print(first_letters)


numbers = [1, 2, 3, 4, 5, 6]

evens = []

for num in numbers:
    if num % 2 == 0:
        evens.append(num)

print(evens)


list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]

common = []

for num in list1:
    if num in list2:
        common.append(num)

print(common)


words = ["Elie", "Tim", "Matt"]

reversed_words = []

for word in words:
    reversed_words.append(word[::-1].lower())

print(reversed_words)


word1 = "first"
word2 = "third"

same_letters = []

for letter in word1:
    if letter in word2:
        same_letters.append(letter)

print(same_letters)


divisible_by_12 = []

for num in range(1, 101):
    if num % 12 == 0:
        divisible_by_12.append(num)

print(divisible_by_12)


word = "amazing"
vowels = "aeiou"

no_vowels = []

for letter in word:
    if letter not in vowels:
        no_vowels.append(letter)

print(no_vowels)


small_grid = []

for i in range(3):
    row = []

    for j in range(3):
        row.append(j)

    small_grid.append(row)

print(small_grid)


big_grid = []

for i in range(10):
    row = []

    for j in range(10):
        row.append(j)

    big_grid.append(row)

print(big_grid)