//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
//Version1
{
    function ArrayAlCuadrado(mArray)
    {
        if (!Array.isArray(mArray)) {
            return console.log("No se proporcionó un array.");
        }
        if(mArray.length==0)
        {
            return console.log("Array vacio.");
        }else
        {
            let mArrayAlCuadrado = new Array(mArray.length);
            for(let i=0; i<mArray.length; i++)
            {
                mArrayAlCuadrado[i] = mArray[i]**2;
            }
            return console.log(`El array original es ${mArray}, y el array al cuadrado es ${mArrayAlCuadrado}.`);
        }
    }
    ArrayAlCuadrado();//Primer if.
    ArrayAlCuadrado([]);//Segundo if.
    ArrayAlCuadrado([2,4]);
}

//Version 2
{

}

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
//Version1
{

}

//Version 2
{

}

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
//Version1
{

}

//Version 2
{

}
