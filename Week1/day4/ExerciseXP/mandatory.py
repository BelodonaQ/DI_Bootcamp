# Exercise 1
my_fav_numbers = {3, 7, 13, 21}

my_fav_numbers.add(44)
my_fav_numbers.add(99)

my_fav_numbers.remove(99)

friend_fav_numbers = {5, 7, 18, 22}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)


# Exercise 2
my_tuple = (1, 2, 3, 4)

my_tuple = my_tuple + (5, 6, 7)

print(my_tuple)


# Exercise 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")

print(basket.count("Apples"))

basket.clear()

print(basket)


# Exercise 4
numbers = []

for i in range(3, 11):
    numbers.append(i / 2)

print(numbers)


# Exercise 5
for number in range(1, 21):
    print(number)

for index, number in enumerate(range(1, 21)):
    if index % 2 == 0:
        print(number)


# Exercise 6
while True:
    name = input("Enter your name: ")

    if not name.isdigit() and len(name) >= 3:
        print("thank you")
        break
    else:
        name = input("Enter a proper name: ")


# Exercise 7
favorite_fruits = input("Enter your favorite fruits separated by spaces: ").split()

fruit = input("Enter the name of any fruit: ")

if fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")


# Exercise 8
toppings = []

while True:
    topping = input("Enter a pizza topping, or type quit: ")

    if topping == "quit":
        break

    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

total_cost = 10 + len(toppings) * 2.50

print(toppings)
print(f"Total cost: ${total_cost}")


# Exercise 9
total_cost = 0

while True:
    age = input("Enter age, or type quit: ")

    if age == "quit":
        break

    age = int(age)

    if age < 3:
        total_cost += 0
    elif age <= 12:
        total_cost += 10
    else:
        total_cost += 15

print(f"Total ticket cost: ${total_cost}")

attendees = []

while True:
    name = input("Enter attendee name, or type quit: ")

    if name == "quit":
        break

    age = int(input("Enter attendee age: "))

    if age >= 16 and age <= 21:
        attendees.append(name)

print(attendees)