n = int(input())
numbers = input().split()
arr = []
res = ""

for num in numbers:
    arr.append(int(num))

for i in arr:
    if i % 2 == 0:
        res += str(i) + " "
print(res)