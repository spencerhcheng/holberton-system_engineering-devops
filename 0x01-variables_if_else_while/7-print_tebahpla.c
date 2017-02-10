#include <stdio.h>

/**
 * main - Function that prints out
 * letters from A to Z in reverse
 * order using putchar.
 * Return: 0
*/

int main(void)
{
	char letter;

	letter = 'z';
	while (letter >= 'a')
	{
		putchar(letter);
		letter--;
	}
	putchar('\n');
	return (0);
}
