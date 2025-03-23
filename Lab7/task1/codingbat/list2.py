def count_evens(nums):
  return sum(1 for n in nums if n % 2 == 0)

def big_diff(nums):
  return max(nums) - min(nums)

def centered_average(nums):
  return sum(sorted(nums)[1:-1]) // (len(nums) - 2)

def sum13(nums):
  total, skip = 0, False
  for n in nums:
    if n == 13:
      skip = True
      continue
    if skip:
      skip = False
      continue
    total += n
  return total

def sum67(nums):
  total, blocked = 0, False
  for n in nums:
    if n == 6:
      blocked = True
    elif n == 7 and blocked:
      blocked = False
    elif not blocked:
      total += n
  return total

def has22(nums):
  return any(nums[i] == nums[i + 1] == 2 for i in range(len(nums) - 1))
