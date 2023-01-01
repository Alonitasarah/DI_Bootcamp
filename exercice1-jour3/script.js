const people = ["Greg", "Mary", "Devon", "James"];
people.shift("Greg");
console.log(people);
people.splice(2,1,"Jason");
console.log(people);
people.push("alonita sarah");
console.log(people);
/* pour trouver l'indice d'un élément*/
console.log(people.indexOf("Mary"));
/* pour rendre invisble des éléments du tableau*/
console.log(people.slice(1, 3));
console.log(people.indexOf("Foo"));
/* il renvoie -1 parceque "FOO" n'est pas dans le tableau */
const last = (people[3]);
console.log(last);
/* l'indice du tableau n'est pas la taille du tableau */
for (let i = 0; i < people.length; i++) {
console.log(people[i]);
    
}
const element = 'Jason';
switch (element) {
  case 'Mary':
    console.log('Mary');
    break;
  case 'Devon':
    console.log('Devon');
  case 'Jason':
    console.log('Jason');
    break;
  default:
    console.log(` Jason ${element}.`);
}