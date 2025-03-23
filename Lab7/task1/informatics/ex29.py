n = int(input())
numbers = input().split()
arr = []
count = 0

for num in numbers:
    arr.append(int(num))

for i in range(2, n):
    if arr[i - 2] < arr[i - 1] and arr[i - 1] > arr[i]:
        count += 1
print(count)