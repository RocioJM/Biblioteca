//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
//Version1
{
    
}

//Version 2
{
    const convertirBinarioDEcimal = (numero = undefined, base = undefined) =>
    {
        //******** Comprobaciones ******/
        if(numero === 0)
        {
            return console.warn("No ingresaste un numero.");
        }
        if(typeof numero != "number")
        {
            return console.error(`El valor "${numero}" ingresado NO es un numero.`);
        }
        if(base === 0)
        {
            return console.warn("No ingresaste un numero.");
        }
        if(typeof base != "number")
        {
            return console.error(`El valor "${numero}" ingresado NO es un numero.`);
        }
        //******** /Comprobaciones ******/

        if(base===2){
            return console.info(`El numero ${numero} base ${base} = ${parseInt(numero,base)} base 10.`)
        }
    }
    convertirBinarioDEcimal();
    convertirBinarioDEcimal(101,2);
}

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
//Version1
{
    function Descuento(cantidad = 0, descuento = undefined)
    {
        //******** Comprobaciones ******/
        if(cantidad === 0)
        {
            return console.warn("No ingresaste un numero.");
        }
        if(typeof cantidad != "number")
        {
            return console.error(`El valor "${cantidad}" ingresado NO es un numero.`);
        }
        if (Math.sign(cantidad)== -1)
        {
            return console.error(`El valor "${cantidad}" no puede ser un nunmero negativo.`);
        }
        if(descuento === 0)
        {
            return console.warn("No ingresaste un numero.");
        }
        if(typeof descuento != "number")
        {
            return console.error(`El valor "${descuento}" ingresado NO es un numero.`);
        }
        if (Math.sign(descuento)== -1)
        {
            return console.error(`El valor "${descuento}" no puede ser un nunmero negativo.`);
        }
        //******** Comprobaciones ******/

        return cantidad - cantidad*(descuento/100);
    }

    console.info("Descuento: "+Descuento(1000,20));
}

//Version 2
{

}

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
//Version1
{

}

//Version 2
{
    const calcularAnios = (fecha = undefined) =>
    {
        if(fecha===undefined){
            return console.warn("No ingresaste la fecha.");
        }
        if(fecha===undefined)
        {
            return console.warn("No ingresaste la fecha.");
        }
    }
}