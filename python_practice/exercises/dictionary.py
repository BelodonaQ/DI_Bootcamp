# Exercise 1: Dictionary


# 1. Turn a list of pairs into a dictionary
info = [("name", "Elie"), ("job", "Instructor")]

person = {}

for key, value in info:
    person[key] = value

print(person)


# 2. Combine two lists into one dictionary
states = ["CA", "NJ", "RI"]
full_names = ["California", "New Jersey", "Rhode Island"]

state_names = {}

for i in range(len(states)):
    state_names[states[i]] = full_names[i]

print(state_names)


# 3. Create a dictionary with vowels as keys and 0 as each value
vowels = "aeiou"

vowel_dict = {}

for vowel in vowels:
    vowel_dict[vowel] = 0

print(vowel_dict)


# 4. Create a dictionary with alphabet positions as keys
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

alphabet_dict = {}

for i in range(len(alphabet)):
    alphabet_dict[i + 1] = alphabet[i]

print(alphabet_dict)


# Super Bonus: Count the vowels in a string
sentence = "awesome sauce"
vowels = "aeiou"

vowel_count = {}

# Start each vowel at 0
for vowel in vowels:
    vowel_count[vowel] = 0

# Add 1 each time a vowel appears in the sentence
for letter in sentence:
    if letter in vowels:
        vowel_count[letter] += 1

print(vowel_count)