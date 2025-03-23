def make_bricks(small, big, goal):
  resto = goal - 5 * min(big, goal // 5)
  return resto - small <= 0

def lone_sum(a, b, c):
  return sum(n for n in (a, b, c) if (a, b, c).count(n) == 1)

def lucky_sum(a, b, c):
  nums = [a, b, c, 13]
  return sum(nums[:nums.index(13)])

def no_teen_sum(a, b, c):
  def fix_teen(n):
    return n if n not in [13, 14, 17, 18, 19] else 0
  return fix_teen(a) + fix_teen(b) + fix_teen(c)

def round_sum(a, b, c):
  def round10(num):
    return (num + 5) // 10 * 10
  return round10(a) + round10(b) + round10(c)

def close_far(a, b, c):
  return (abs(b - c) >= 2) and \
         ((abs(b - a) <= 1 and abs(c - a) >= 2) or (abs(c - a) <= 1 and abs(b - a) >= 2))
