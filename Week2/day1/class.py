# # docstrings describe functions with ("""""")

# def greet(group):
#   """This function greets"""
#   print("Hello World")
#   print(f"Hello group (group)")


# # scope is basically like where can a varaible be used
# my_other_var = "chicken"

# def scope(my_var):
#   print(f"This is my var (my_var)")


# # why are return values important

# def calc(x, y):
#   xy = x + y, x - y

# calc(2, 3)

# # args and kwargs is when you can take in any number of arguments that you want (important thing about args is the *)

# def some_func(*args):
#   print(args)


# # lambda functions are single line functions

# names = ["John", "Alex", "Sam", "Elizabeth", "Liam"]

# short_names = filter(lambda name: len(name) <= 4, names)

# greetings = map(lambda name: f"Hello {name}", short_names)

# print(list(greetings)) 

print("Hi people")

# length function

hn = len("Hi people")
print(hn)