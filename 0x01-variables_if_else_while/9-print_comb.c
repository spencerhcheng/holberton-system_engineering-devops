#include <stdio.h>

/**
 * main - Prints all possible combinations
 * of single-digit numbers seperated by a
 * space in ascending order. Use only putchar.
 * Return:0
 */

int main(void)
{
	char i = '0';

	while (i <= '9')
	{
		putchar(i);
		if (i <= '8')
		{
			putchar(',');
			putchar(' ');
		}
		i++;
	}
	putchar('\n');
	return (0);
}
