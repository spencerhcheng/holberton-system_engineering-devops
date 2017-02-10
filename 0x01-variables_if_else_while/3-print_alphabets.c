#include <stdio.h>

/** main -  function prints out lower case
 * a to z followed by upper case A
 * to Z followed by a new line.
 * return 0
*/

int main(void)
{
	char letter;

	letter = 'a';

	while (letter <= 'z')
	{
		putchar(letter);
		letter++;
	}

	letter = 'a';

	while (letter <= 'z')
	{
		putchar(toupper(letter));
		letter++;
	}

	putchar('\n');

	return (0);
}
