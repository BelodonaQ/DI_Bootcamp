import random

# functions

def display_message():
  print("I am learning python")

print(display_message)

# exercise 2



def favorite_book(title):
    print(f"One of my favorite books is called {title}")


favorite_book("the rise and fall of dinosaurs")


# exercise 3

country = "Unknown"

def describe_city(city, country = "Unknown"):
   print(f"{city} is in {country}")
   

describe_city("NY")

# exercise 4

def random_numb(num = 1):
   rand = random.randint(1, 100)
   
   if num == rand: 
      print("success!")
   else: print(f"Trash! Your number: {num}, random number: {rand}")
   
random_numb(41)

# exercise 5

def make_shirt(size = "Large", text = "I love python"):
   print(size + " " + text)

make_shirt("medium")

# exercise 6 (combines 6.1 and 6.2)
      
magician_names = ["Harry Houdini", "David Blain", "Criss Angel"]

def show_magicians(magician_names):
   
   for item in magician_names:
      print(f"{item} the great")

show_magicians(magician_names)

# exercise 7

def get_random_temp():
   return random.randint(-10, 40)

def main():
   
   temp = get_random_temp()
   print(f"The current temperature is {temp} degrees celcius")
   if temp < 0: 
      print("That's cold!")
   elif temp >= 0 and temp <= 16:
      print("Quite chilly, don't forget your coat")
   elif temp > 16 and temp <= 24:
      print("Nice weather")
   elif temp >= 25 and temp <= 32:
      print("A bit warm, stay hydrated")
   else: print("it's really hot, stay cool")  
      

main()



   
  
   
   

