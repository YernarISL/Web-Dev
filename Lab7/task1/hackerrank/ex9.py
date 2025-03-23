s = input("Enter your full name: ")

name = s.split()

name[0] = name[0].capitalize()
name[1] = name[1].capitalize()

print(name[0] + " " + name[1])