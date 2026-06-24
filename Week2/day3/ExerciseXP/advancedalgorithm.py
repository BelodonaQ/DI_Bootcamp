import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number = 3728


def find_sum():
    pairs = []

    for number1 in list_of_numbers:
        for number2 in list_of_numbers:
            if number1 + number2 == target_number:
                pair = (min(number1, number2), max(number1, number2))

                if pair not in pairs:
                    pairs.append(pair)

    return pairs


print(find_sum())
