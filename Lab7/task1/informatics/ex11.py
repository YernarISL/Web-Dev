a = int(input())
b = int(input())
c = ""
for k in range(a, b + 1):
    if k % 2 == 0:
        c += str(k) + " "
print(c)