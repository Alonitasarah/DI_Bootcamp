/* créé un tableau */
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
/* affichage */
console.log(fruits);
/* supprimé un éléments du tableau */
fruits.shift();
console.log(fruits)
/* trié par ordre alphabétique les éléments du tableau */
fruits.sort();
console.log(fruits);
/* ajouter un élément à la fin du tableau */
fruits.push('Kiwi');
console.log(fruits);
/* supprimer un éleément quelconque du tableau */
fruits.splice(0,1);
console.log(fruits);
/* inversé le tableau c'est à dire le premier devient le dernier */
const reversed = fruits.reverse();
console.log(fruits);
