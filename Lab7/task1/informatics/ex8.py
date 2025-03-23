a = int(input())
b = int(input())

if a // 1000 < 10 and a // 1000 == a % 10 and (a // 100) % 10 == (a % 100) // 10:
    if b == 1:
        print("YES")
    else :
        print("NO")
else:
    if b != 1:
        print("YES")
    else:
        print("NO")
