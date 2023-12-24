// 5. Programa una funcion que invierta las palabras de una de texto. Pe: miFuncion("Hola Mundo") devolvera "odnuM aloH"
let cadenaTexto = "Hola Mundo";
console.log(cadenaTexto);

function invertir(texto = "")
{
    if(texto == "")
    {
        console.warn("No ha introducido ningun texto para invertirlo.");
    }else
    {
        let temp = "";
        let arrayText= texto.split("");
        arrayText.reverse();

        for(c of arrayText)
        {
            temp += c;
        }
        return temp;
    }
}

console.log("El texto invertido es: " + invertir(cadenaTexto));

// 6. Programa una funcion en el que cuente el numero de veces que se repite una palabra en un texto. Pe: miFuncion("Hola Mundo adios mundo", "mundo") devolvera "2".
let palabra = "mundo";
let texto = "Hola Mundo adios mundo";
function contar(texto = "", palabra = "")
{
    let contador = 0;
    if(texto == "")
    {
        console.warn("No ha introducido ningun texto.");
    }else
    {
        if(palabra == "")
        {
            console.warn("No ha introducido la palabra que quiere buscar.");
        }else
        {
            let arrayTexto = texto.split(' ');

            for (let i=0; i < arrayTexto.length; i++)
            {
                if(arrayTexto[i].toLocaleLowerCase() == palabra.toLocaleLowerCase())
                {
                    contador++;
                }
            }
            return contador;
        }
    }
}

console.log("El numero de veces que sale la palabra " + palabra + " es " + contar(texto, palabra) + "\n");

// 7. Programa una funcion que valide si una palabra o una frase dada es un palindromo (que se lee igual en un sentido que en otro). Pe: miFuncion("Salas", "mundo") devolvera true.

function IsPalindromo (texto = "")
{
    let primerParte = "";
    let segundaParte = "";
    if(texto == "")
    {
        console.warn("No ha introducido ningun texto.");
    }else
    {
        let arrayTexto = texto.split("");
        for(let i = 0; i < arrayTexto.length; i++)
        {
            if(arrayTexto.length % 2 == 1 && Math.floor(arrayTexto.length / 2)==i)//Numero de caracteres impar.
            {
                continue;
            }else if (i < arrayTexto.length / 2)
            {
                primerParte += arrayTexto[i];
            }else if (i > arrayTexto.length / 2 
                    || ((arrayTexto.length / 2)==i) && arrayTexto.length % 2 == 0)
            {
                segundaParte += arrayTexto[i];
            }
        }
        
        let temp = invertir(segundaParte);
        let iguales = true;
        for (let i=0; i < temp.length; i++)
        {
            if(primerParte[i].toLocaleLowerCase() != temp[i].toLocaleLowerCase())
            {
                iguales = false;
            }
        }
        return iguales;
    }
}

console.log(IsPalindromo("salas"));

// 8. Programa una funcion que elimine cierto patron de caracteres de un texto dado. Pe: miFuncion("1xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolvera "11, 2, 3, 4 y 5".

cadenaTexto = "1xyz1, xyz2, xyz3, xyz4 y xyz5";
let patron = "xyz";

function EliminarPatron (Texto = "", Patron = "")
{
    let expReg = new RegExp(Patron,"ig");//la i es para discriminar mayusculas y minusculas, y la g significa que lo busca de manera global, no solo la primera que encuentre.
    return Texto.replace(expReg,"");
}

console.log("El nuevo texto es: "+EliminarPatron(cadenaTexto,patron));