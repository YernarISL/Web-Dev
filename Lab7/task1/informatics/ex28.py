n = int(input())
numbers = input().split()
arr = []
isEqual = False

for num in numbers:
    arr.append(int(num))

for i in range(1, n):
    if arr[i - 1] == arr[i]:
        isEqual = True
print("Yes" if isEqual else "No")