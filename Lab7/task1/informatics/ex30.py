n = int(input())
numbers = input().split()
arr = []
count = 0

for num in numbers:
    arr.append(int(num))

for i in range(0, n // 2):
    arr[i], arr[n - 1 - i] = arr[n - 1 - i], arr[i]

print(arr)
