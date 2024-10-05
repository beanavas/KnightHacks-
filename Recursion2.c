// Construct #1 //

#include <stdio.h>
#include <stdlib.h>

//fibonacci numbers 
//recursion tree helps you keep track of whats going on in recursion 

int fib(int n){

    if(n <= 1)
    return n;
    else
    return fib(n-1) + fib(n-2);

}
void rec2(int x) {

    if(x==0)
    return;
    rec2(x-1);
    printf("%d ", x);
}

int main(){

    int n;

    scanf("%d", &n);

    fib(n);

    rec2(5);
}

int f(int n){
    int ans;
    int i;
    if(n<3) return n;
    ans = f(n/2);
    for(i = 0; i<n; i++)
    ans += f(i);
    return ans;
}

