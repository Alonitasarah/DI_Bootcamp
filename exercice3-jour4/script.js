function isDivisible(divisor) {
    let sum=0;
    for (let i=0;i<500;i++)
    {
        
        if(i%divisor === 0);
        {
         console.log(i);
        sum=sum+i;
        }

    }
    console.log("la somme des nombres divisible par 23 est :",sum);
} 
isDivisible(23);