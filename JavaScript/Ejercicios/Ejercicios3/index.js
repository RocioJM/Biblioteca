// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// 9. Programa una función que obtenga un numero aleatorio entre 501 y 600.
//Version 1
{
    let max = 600;
    let min = 501;
    let numero = Math.floor(Math.random()*(max - min + 1) + min);

    console.log("Numero random:" + numero);
}
//Version 2
{

}

// 10. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
//Version 1
{
    function IsCapicua (numero = 0)
    {
        //const valoresAceptados = /^[0-9]+$/;
        let temp = "";
        if(numero == 0 || !Number.isInteger(numero))
        {
            console.warn("No has introducido un numero valido.");
        }else{
            temp = numero.toString();
            console.log("Texto:"+temp);
            //Buscar d incluir el index.js donde esa lo del palindromo.
        }
    }
    let num = 123;
    IsCapicua(num );
}
//Version 2
{

}