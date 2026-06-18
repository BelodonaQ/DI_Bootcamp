# print(f"Hello World" * 4)

# # 2

# x = 99**3*8
# print(x) #7762392

# #3 (Not sure what the question asks of me so i'll skip)

# #4

# computer_brand = "Apple"

# print(f"i have an {computer_brand} computer") # i have an apple computer

# #5
# name = "Seem"
# age = 28
# shoe_size = 45
# info = f"Hi my name is {name} and i'm {age}. Btw, i wear a size {shoe_size}"
# print(info) 

# # prints expected result

# #6

# a = 6
# b = 7

# if b <= a:
#   print('Hi World')
# else:
#   print("Hello World")

# #7

# number = int(input("Enter a number: "))

# if number % 2 == 0:
#     print("Even")
# else:
#     print("Odd")

# #8

# name = input(str(" Enter your name "))
# my_name = "Seem"

# if name == my_name:
#    print("You're an imposter!")
# else:
#    print("You're good fam")
  

# #9 

# height = float(input(" Your height in cm "))
# # cm_max_height = 145


# if height == 145:
#    print("You almost lost boss, but enjoy!")
# elif height >145:
#    print("Enjoy the ride!")
# else:
#    print("Get height increasing surgery friend")

# #XP Gold

# #1
# print(f" Hello world "*3 + " I love python " *3)

# #2

# month = input("Which month is it?")

# if month < 3:
#    print("it's winter")
# elif month > 3:
#    print("It's a season, just not winter.")


# def display_invoice(username, amount, due_date): 
#    print(f"Hello {username} ")
#    print(f"Your bill of {amount} is here ")
#    print(f"pay by {due_date} to avoid unwanted attention ")
   
# display_invoice("John", 1200, "05.05.27")

# # return = a statement used to end a function and send a result back to the caller

# # create a full name

# def create_name(first, last):
#    first = first.capitalize()
#    last = last.capitalize()
#    return first + " " + last

# full_name = create_name("jonny", "blvis")

# print(f"Welcome Back {full_name}")

# def create_introduction(name, age, height, weight):
#     first_part = "Your name is " + name + " and you are " + age + " years old."
#     second_part = "You are " + height + " meters tall and weigh " + weight + " kilograms."
#     full_intro = first_part + " " + second_part
#     return full_intro

# def say_hello():
#    h = "say hello"
#    return h

# greeting = say_hello()
# print(greeting)

# def greet_user():
#    a = "Hello,"
#    b = input("What's your name?")
#    return a + b

# name = greet_user()
# print(name)

# def add(a, b):
#    calc = a + b
#    return calc

# calc = add
# print(calc(12, 6))

# def square(a):
#    a = int(input("Your Number"))
#    square_it = a * a
#    return square_it


# print(square(2))

# def is_even(number):
#    return number % 2 == 0
   


def minutes_to_seconds(minutes):
   return minutes * 60

print(minutes_to_seconds(5123))


def larger(large, larger):
   return large <= larger

print(larger(5, 5))

list1 = [5, 10, 15, 20, 25, 50 ,20]
list1[3] = 200
   
   

print(list1)

a_tuple = (10, 20, 30, 40)


yours = int(input("Enter NUMBER"))
mine = yours * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(mine)
   