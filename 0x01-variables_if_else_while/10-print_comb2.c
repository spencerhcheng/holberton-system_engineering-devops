#include <stdio.h>

/**
 * main - prints all double digit
 * numbers fro 0 to 99 using 5 putchars
 * Return:0
 */

int main(void)
{
	int i = 0;
	int j = 0;
	int c;
	int d;

	while (i <= 9)
	{
		while (j <= 9)
		{
			c = i + '0';
			putchar(c);
			d = j + '0';
			putchar(d);
			if (i == 9 && j == 9)
			{
				putchar('\n');
			}
			else
			{
				putchar(',');
				putchar(' ');
			}
			j++;
		}
		j = 0;
		i++;
	}
	return (0);
}
