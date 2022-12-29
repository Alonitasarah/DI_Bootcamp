const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = (3);
const myWatchedSeriesSentence = ("black mirror money heist the big bang theory");
console.log("I watched "+myWatchedSeriesLength +' '+myWatchedSeriesSentence);
/* supprimer et ajouter un élément dans le tableau*/
myWatchedSeries.splice(2,1,'friends');
console.log(myWatchedSeries);
/* supprimer et ajouter un éléments dans le tableau*/
myWatchedSeries.push("les coups de la vie")
console.log(myWatchedSeries);
/* ajouter un élément au début du tableau*/
myWatchedSeries.unshift("black panther");
console.log(myWatchedSeries);
/* supprimer un élément du tableau */
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);
/* console.log pour faire sortir l'élément dont on besoin puis (nom de la variable[indice de l'élément]point substring pour avoir accés à l'indice des mots de notre éléments puis(l'indice,la position de l'élément)) */
console.log(myWatchedSeries[1].substring(2,3));
console.log(myWatchedSeries);
