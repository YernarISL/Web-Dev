x = int(input(""))
res = ""
for i in range(1, x + 1):
    if x % i == 0:
        res += str(i) + " "
print(res)