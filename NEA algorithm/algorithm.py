import random

def generate_square():
    square = [[' ' for i in range(6)] for j in range(6)]
    for i in range(20):
        row = random.randint(0, 5)
        col = random.randint(0, 5)
        square[row][col] = 'W'
    return square

def print_square(square):
    print('-' * 13)
    for row in square:
        print('|', end='')
        for col in row:
            print(col, end=' |')
        print()
        print('-' * 13)

square = generate_square()
print_square(square)
print('hi')