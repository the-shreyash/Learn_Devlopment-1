#include<stdio.h>
int main()
{
  int a[50],i,j,temp,n,min;
  printf("enter number of elements\n");
  scanf("%d",&n);
  printf("enter array elemnts\n");
       for (i = 0; i < n; i++)
       {
        scanf("%d",&a[i]);
       }
       for (i = 0; i <n-1; i++)
       {
        min=i;
{
        }
        for (j = i +1; j <n; j++)
        {
            if(a[min]>a[j])
            {
                min=j;
            }
        }
         if(a[min]!=i)
{
        temp=a[min];
        a[min]=a[i];
        a[i]=temp;
}

       }
        for ( i = 0; i <n; i++)
        {
        printf("%d\n",a[i]);
        }
}

