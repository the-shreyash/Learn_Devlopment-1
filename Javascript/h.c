//program for calculating expenses of a trip
#include<stdio.h>
int main()
{int i,m,f,am,af,countam=0,countaf=0;
float agem,agef;
      
       printf("enter total no. of males:") ;
       scanf("%d",&m);
       printf("enter total no. of females:") ;
       scanf("%d",&f);

       printf("enter the ages of male:\n");
       for(i=1;i<=m;i++)
      {
       scanf("%f",&agem);
      }     
       printf("enter the ages of females\n");
      for(i=1;i<=f;i++)
      {
       scanf("%f",&agef);
      }
       for(i=1;i<=m;i++) 
       { if(agem>=18){
            countam = countam++;
       }
        
       }
      for(i=1;i<=f;i++) 
       { if(agef>=18)
       { countaf=countaf++;}
       }
    int cm=m-countam;
    int cf=f-countaf;
      float price=(countam*1000)+(countaf*1500)+(cm*500)+(cf*750);
      printf("package price:$%f",price);
      
         printf("\n this is for total %d memebers",m+f);
         printf("\n(for adult male:$1000\n");
         printf("for adult female:$1500\n");
         printf("for child male:$500\n");
          printf("for child female:$750)\n");

return 0;
}