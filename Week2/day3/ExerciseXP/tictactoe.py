# this is my tic tac toe project (Seem)

# board represents the indexes
board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

def create_board():
    return [" ", " ", " ", " ", " ", " ", " ", " ", " "]

def display_board(board):
    print()
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("---+---+---")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("---+---+---")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print()

# pos guide
def display_position_guide():
    print("Choose a position:")
    print()
    print(" 1 | 2 | 3 ")
    print("---+---+---")
    print(" 4 | 5 | 6 ")
    print("---+---+---")
    print(" 7 | 8 | 9 ")
    print()

# player and boot
position = input("Choose a position form 1-9:")

def get_player_move():
    while True:
        position = input("Choose a position form 1 to 9: ")

        try:
            position = int(position)

            if position >= 1 and position <= 9:
                return position
            else:
                print("Please choose a number between 1 and 9.")

        except ValueError:
            print("Please type a valid number.")

def is_valid_move(board, position):
    index = position - 1
    return board[index] == " "

def make_move(board, position, player):
    index = position - 1
    board[index] = player

def switch_player(player):
    if player == "X":
        return "O"
    else:
        return "X"
    
def check_tie(board):
    return " " not in board
    
def check_winner(board, player):
    winning_combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for combo in winning_combinations:
        a, b, c = combo

        if board[a] == player and board[b] == player and board[c] == player:
            return True

    return False

# play

def play_game():
    board = create_board()
    current_player = "X"
    game_running = True

    display_position_guide()

    while game_running:
        display_board(board)

        print(f"Player {current_player}'s turn")

        position = get_player_move()

        if is_valid_move(board, position):
            make_move(board, position, current_player)

            if check_winner(board, current_player):
                display_board(board)
                print(f"Player {current_player} wins!")
                game_running = False

            elif check_tie(board):
                display_board(board)
                print("It's a tie!")
                game_running = False

            else:
                current_player = switch_player(current_player)

        else:
            print("That spot is already taken. Try again.")

play_game()