const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log("les apparterments du premier étages sont:",building.numberOfAptByFloor.firstFloor);
console.log("les apparterments du troisiéme étages sont:",building.numberOfAptByFloor.thirdFloor);
console.log("le nom du deuxiéme locataire est" ,building. nameOfTenants[1]);
console.log("le nombre d'appartement qu'il posséde est ",building.numberOfRoomsAndRent.dan[0]);

const loyersarah = building.numberOfRoomsAndRent.sarah[1];
const loyerdavid = building.numberOfRoomsAndRent.david[1];
const loyerdan = 1000;
if (loyersarah+loyerdavid>loyerdan) {
    building.numberOfRoomsAndRent.dan[1] = 1200; 
}
console.log(building);