import math

a = int(input())
b = int(input())
res = ""
for i in range(a, b+1):
    if math.sqrt(i) == int(math.sqrt(i)):
        res += str(i) + " "
print(res)