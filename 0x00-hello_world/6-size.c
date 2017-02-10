#include <stdio.h>
int main(void)
{
	char c;
	int i;
	float f;
		
	printf("Size of a char: %lu.\n byte(s)", (unsigned long)sizeof(c));
	printf("Size of int: %lu.\n byte(s)", (unsigned long)sizeof(i));
	printf("Size of a long int: %lu.\n byte(s).", (unsigned long)sizeof(i));
	printf("Size of a long long int: %lu.\n byte(s)", (unsigned long)sizeof(i));
	printf("Size of a float: %lu.\n byte(s)", (unsigned long)sizeof(f)); 
	return(0);
}
