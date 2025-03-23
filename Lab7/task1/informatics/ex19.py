import math
N = int(input())
cnt = 1
while cnt < N:
    if math.sqrt(cnt) == int(math.sqrt(cnt)):
        print(cnt)
    cnt += 1