N = int(input())
c = 2
least = N
while c < N:
    if N % c == 0 and c <= least:
        least = c
    c += 1
print(least)