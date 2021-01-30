nums = [3, 6, 15, 43, 50]


def process(num):
    if num % 3 == 0 and num % 5 == 0:
        print('FizzBuzz', num)  
    elif num % 3 == 0:
        print('Fizz', num)
    elif num % 5 == 0:
        print('Buzz', num)
    else:
        print(num, 'not divisible by 3 or 5')

for num in nums:
    process(num)
