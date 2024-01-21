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
    function NombreValido(texto = "")
    {
        if(texto === "")
        {
            return console.warn("No ha introducido ningun texto.")
        }
        if(typeof texto !== `string`)
        {
            return console.warn("No hay introducido caracteres de tipo texto.");
        }
        let nombreCompleto = texto.split(" ");
        
        if(nombreCompleto.length>=2)
        {
            return console.log(`el nombre de ${texto} es valido.`);
        }else{
            return console.log(`el nombre de ${texto} no es valido.`);
        }
    }
    NombreValido("Hola papa");
}

//Version2
{

}

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
//Version 1
{
    function ValidarEmail(email = "")
    {
        if(email === "")
        {
            return console.warn("No ha introducido ningun email.")
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(email))
        {
            return console.log("El email es valido.")
        }else
        {
            return console.log("El email no es valido.")
        }
    }
    ValidarEmail();
    ValidarEmail("rocioasd.com");
    ValidarEmail("rociojm@gmail.com");
}

//Version2
{

}