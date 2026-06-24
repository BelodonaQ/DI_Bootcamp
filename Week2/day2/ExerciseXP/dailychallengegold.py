MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%'''

# Step 1: Convert the string into rows
rows = MATRIX_STR.strip("\n").split("\n")

# Step 2: Convert each row into a list of characters
matrix = []

for row in rows:
    matrix.append(list(row))

# Step 3: Get the number of rows and columns
number_of_rows = len(matrix)
number_of_columns = len(matrix[0])

# Step 4: Read the matrix 
raw_message = ""

for col in range(number_of_columns):
    for row in range(number_of_rows):
        character = matrix[row][col]
        raw_message += character

# Step 5: Replace groups of symbols between letters 
decoded_message = ""
symbol_seen = False

for char in raw_message:
    if char.isalpha():
        if symbol_seen and decoded_message != "":
            decoded_message += " "

        decoded_message += char
        symbol_seen = False
    else:
        symbol_seen = True

# Step 6: Print the final message
print(decoded_message)

# This is Matrix