#include <stdio.h>

/**
 * main -  function prints out lower case
 * a to z followed by upper case A
 * to Z followed by a new line.
 * Return: 0
*/

int main(void)
{
	char lowerLtr = 'a';
	char upperLtr = 'A';

	while (loweLtr <= 'z')
	{
		putchar(lowerLtr);
		lowerLtr++;
	}

	upperLtr = 'A';

	while (upperLtr <= 'A')
	{
		putchar(upperLtr);
		upperLtr++;
	}

	putchar('\n');

	return (0);
}
