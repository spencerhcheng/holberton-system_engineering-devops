#include <stdlib.h>
#include <time.h>
#include <stdio.h>

/**
 * main - function that prints out a random number
 * finds the last number and determines whether the
 * last digit is 0, greater than 5, or less than 6,
 * but not 0
 * Return: 0
*/

int main(void)
{
	int n;

	srand(time(0));
	n = rand() - RAND_MAX / 2;
	printf("Last digit of %d is %d ", n, n % 10);
	if (n % 10  > 5)
	{
		printf("and is greater than 5\n");
	}
	else if (n % 10  == 0)
	{
		printf("and is 0\n");
	}
	else
	{
		printf("and is less than 6 and not 0\n");
	}
	return (0);
}
