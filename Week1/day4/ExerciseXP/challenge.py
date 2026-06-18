# Challenge 1
number = int(input("Enter a number: "))
length = int(input("Enter a length: "))

multiples = []

for i in range(1, length + 1):
    multiples.append(number * i)

print(multiples)


# Challenge 2
word = input("Enter a word: ")

new_word = ""

for letter in word:
    if len(new_word) == 0 or letter != new_word[-1]:
        new_word += letter

print(new_word)