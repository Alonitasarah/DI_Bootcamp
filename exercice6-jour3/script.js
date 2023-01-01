const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  let mots = ""
  for (const key in details) {
    mots = mots +  ""  +  key  +  ""  +  details[key]
  }
  console.log(mots);