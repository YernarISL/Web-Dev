N = int(input())
c = 1
isPowerOfTwo = False
while c <= N and not isPowerOfTwo:
    if c == N:
        isPowerOfTwo = True
    c *= 2
print("YES" if isPowerOfTwo == True else "NO")
