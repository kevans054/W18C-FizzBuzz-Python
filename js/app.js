let nums = [3, 6, 15, 43, 50];

for (num in nums){
    process(num)
}
function process(num)
{
    if (num % 3 == 0 && num % 5 == 0)
    {
        console.log('FizzBuzz');
    }
    else if (num % 3 == 0)
    {
        console.log('Fizz')
    }
    else if (num % 5 == 0)
    {
        console.log('Buzz')
    }
    else
    {
        console.log(num)
    }
}

