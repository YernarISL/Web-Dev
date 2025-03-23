n = int(input())
numbers = input().split()
arr = []
count = 0
for num in numbers:
    arr.append(int(num))

for i in range(1, n):
    if arr[i] > arr[i - 1]:
        count += 1
print(count)