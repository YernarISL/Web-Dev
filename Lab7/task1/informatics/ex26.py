n = int(input())
numbers = input().split()
arr = []
count = 0

for num in numbers:
    arr.append(int(num))

for i in arr:
    if i > 0:
        count += 1
print(count)