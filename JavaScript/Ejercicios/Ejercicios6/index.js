// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
//Version 1
{
    function contarVocalesConsonantes(texto = "")
    {
        if(texto === "")
        {
            return console.info("No ha introducido ningun texto.")
        }
        const vocales = [`a`,`e`,`i`,`o`,`u`];
        const consonantes = [`B`, `C`, `D`, `F`, `G`, `H`, `J`, `K`, `L`, `M`, `N`, `Ñ`, `P`, `Q`, `R`, `S`, `T`, `V`, `W`, `X`, `Y`, `Z`];
        let contVocales = 0;
        let contConsonantes = 0;
        for(let caracter of texto)
        {
            for (let vocal of vocales)
            {
                if(caracter.toLocaleLowerCase() === vocal.toLocaleLowerCase())
                {
                    contVocales++;
                }
            }
            for (let consonante of consonantes)
            {
                if(caracter.toLocaleLowerCase() === consonante.toLocaleLowerCase())
                {
                    contConsonantes++;
                }
            }
        }
        return console.log(`El numero de vocales es de: ${contVocales} y el numero de consonantes es de ${contConsonantes}.`)
    }
    contarVocalesConsonantes();
    contarVocalesConsonantes("Hola Mundo");
}

//Version2
{

}

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
//Version 1
{

}

//Version2
{

}

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
//Version 1
{

}

//Version2
{

}