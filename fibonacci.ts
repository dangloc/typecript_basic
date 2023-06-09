function fibonacci(num: number): number{
    
    let a:number = 1; 
    let b:number = 0;
    let temp:number;

    while(num > 0){
        temp = a;
        a = a + b;
        b = temp;
        num --;
    }

    return b;
}


console.log(fibonacci(100));

