#include <stdio.h>

/**
 * main - Function prints out
 * letters from a to z using
 * putchar rather than printf
 * Return: 0
*/

int main(void)
{
	char letter = 'a';

	while (letter <= 'z')
	{
		putchar(letter);
		letter++;
	}
	putchar('\n');
	return (0);
}
