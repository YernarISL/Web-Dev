n = int(input())
numbers = input().split()
arr = []
res = ""

for num in numbers:
    arr.append(int(num))

for i in range(n):
    if i % 2 == 0:
        res += str(arr[i]) + " "
print(res)