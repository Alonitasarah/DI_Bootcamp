let input = prompt("Entrez des  mots et séparé les avec des virgules");
let MotsReournes = input.split(",");
let LongueurMaximal = 0;

let Etoile = '';
 MotsReournes.forEach((i)=>{

    if(LongueurMaximal < i.length)
    {
        LongueurMaximal = i.length
    }
});

LongueurMaximaleEtoile = LongueurMaximal + 4;
Etoile +=   "*".repeat(LongueurMaximaleEtoile);
Etoile += "\n";
let space = '';

 for(let j=0; j < MotsReournes.length; j++)
{
    let Espace = LongueurMaximaleEtoile - MotsReournes[j].length - 3 ;
    space = ' '.repeat(Espace)

    Etoile +=  "* " + MotsReournes[j] + space + "* \n";
}

Etoile = Etoile + "*".repeat(LongueurMaximaleEtoile);

 console.log(Etoile);
