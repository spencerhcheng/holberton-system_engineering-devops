#include <stdio.h>

/**
 * main - Function prints out
 * numbers from 0 to 9 using
 * putchar.
 * Return: 0
 */

int main(void)
{
	int num = '0';

	while (num <= '9')
	{
		putchar(num);
		num++;
	}
	putchar('\n');
	return (0);
}
