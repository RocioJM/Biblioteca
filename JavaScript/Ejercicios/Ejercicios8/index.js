//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
//Version1
{
    function Ordenacion (arr = undefined)
    {
        if(arr === undefined) return console.warn("No ingesaste un arreglo de numeros.");
        if(!Array.isArray(mArray)) return console.error("El valor que ingresastes no es un arreglo.");
        if(arr.length===0) return console.error("El arreglo esta vacio.");
        for(let num of arr)
        {
            if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero.`);
        }

        for(let i = 0; i < arr.length; i++)
        {

        }
    }
}

//Version2
{

}

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
//Version1
{

}

//Version2
{

}

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
//Version1
{

}

//Version2
{

}