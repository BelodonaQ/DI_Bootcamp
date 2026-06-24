def add(a, b):
  return a + b

x = add(5, 4)
print(x)

def greet():
  return "hello"

print(greet())

def greet():
  print("Hello")

print(greet())

def test():
  print("start")
  return 100
  print("end")

x = test()
print(x)

def squareNumber(a):
  return (a**2)

numb = squareNumber
print(numb(5))

def can_vote(age):
  if age >= 18:
    print("you can vote!")
  else:
    print("you cannot vote")

print(can_vote(19))

def can_vote2(age):
  return age >= 18

print(can_vote2(3))

def full_name(first, last):
  return first + " " + last

print(full_name("Jogn", "Hebrew"))

def calculation(x, y):
  add = x + y
  sub = x - y
  return add, sub
  

print(calculation(5, 9))

def double(a):
  return a*2

print(double(8))

def is_adult(a):
  return a >= 18

print(is_adult(3))

def make_greeting(name):
  greet = f"Hi and welcome {name} :)"
  return greet

print(make_greeting("Samwise"))

def is_empty_space(a):
  return a == ""

print(is_empty_space(""))