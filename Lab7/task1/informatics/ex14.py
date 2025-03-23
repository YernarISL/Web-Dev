x = int(input("Enter a number: "))

least = x

for i in range(2, x + 1):
    if x % i == 0 and least >= i:
        least = i

print(least)
