# not all functions are the same, let's explore function shapes
# some functions take no data. it's just a block of code that runs

# some functions do not return data but only store it

# some functiions do take data. data goes in and data comes out.


# WHAT ARE PARAMETERS?
what_are_parameters = "Parameters are names used in a function definition that describe what data the function expects"

# WHAT ARE ARGUMENTS?
what_are_arguments = "Actual values passed in a function call that are assigned to parameters"

def multiply(x):
  print(x*2)

multiply(40)

name = " "

def clean_name(name):
  print(name.strip().upper())
  return name

clean_name("bobby")
clean_name("tianaCK")