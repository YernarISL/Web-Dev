v = int(input("Enter a speed: "))
t = int(input("Enter a time: "))

if v > 0:
    print(abs(109 - v * t))
else:
    print(abs(109 + v * t))

