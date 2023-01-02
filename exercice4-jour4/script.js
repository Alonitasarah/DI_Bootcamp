const stock={
    "banna":4,
    "apple":0,
    "pear":12,
    "orange":32,
    "blueberry":1
  }
  const prices={
    "banna":4,
    "apple":2,
    "pear":1,
    "orange":1.5,
    "blueberry":10
  }
  let shoppinglist={
    "banna":1,
    "orange":1,
    "apple":1,
  }
  console.log(stock);
  function mybill(){
    let amount=0;
    let result=``;
    for(let i in shoppinglist)
    {
      amount=amount+stock[i]*shoppinglist[i];
      if(stock[i]>0)
      {
        stock[i]=stock[i]-shoppinglist[i];
        result+=`${i} est disponible.${i} coûte : ${prices[i]};\n`
      }
      else
      {
        result+=`${i} est indisponible;\n`
      }
    }
    return console.log(`${result}\n cout total: ${amount}`);
  
  }
  mybill();
  console.log(stock);