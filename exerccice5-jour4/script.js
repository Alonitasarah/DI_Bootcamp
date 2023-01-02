function changeEnough(itemPrice, amountOfChange) {
    console.log("le prix de l'article est", itemPrice)

   const sum = calculateSum(amountOfChange);
   return (sum > itemPrice) 
    
}

function calculateSum(arr) {
    let sum = 0;

    for (let i = 0;i < arr.length;i++){
       let coinValue;

       const numberOfcoins = arr[i];

       if(i === 0) {coinValue = 0.25};
       if(i === 1) {coinValue = 0.10}; 
       if(i === 2) {coinValue = 0.05};
       if(i === 3) {coinValue = 0.01};
       console.log("Nous avons", numberOfcoins,"des pièces d'une valeur de", coinValue);
       
       sum = sum + numberOfcoins * coinValue
    }
    console.log("la somme totale est",sum)
    return sum;
}
changeEnough(4.25, [25, 20, 5, 0]);
