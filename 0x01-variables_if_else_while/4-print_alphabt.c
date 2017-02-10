#include <stdio.h>

/**
 * main - function that prints out
 * a to z in lowercase that omits
 * the characters q and e.
 * Return: 0
 */

int main(void)
{
	char letter = 'a';

	do {
	if (letter == 'e' || letter == 'q')
	{
		letter++;
		continue;
	}
		putchar(letter);
		letter++;
	} while (letter <= 'z');
	putchar('\n');

	return (0);
}
