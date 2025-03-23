def wrap(string, max_width):
    res = ""
    for i in range(0, len(string), max_width):
        res += string[i:i+max_width] + '\n'
    return res

s = input("")
w = int(input(""))

print(wrap(s, w))
