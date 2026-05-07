function calcular() {
        // Obtener los valores de los inputs y select
        const NUM_1 = parseFloat(document.getElementById('num1').value);
        const NUM_2 = parseFloat(document.getElementById('num2').value);
        const SELECT = document.getElementById('operador').value;
        const RESULTADODISPLAY = document.getElementById('resultado');
        let resultado;


        // Realizar la operación usando if
        if (SELECT === "+") {
                resultado = NUM_1 + NUM_2;
            } else if (SELECT === "-") {
                resultado = NUM_1 - NUM_2;
            } else if (SELECT === "*") {
                resultado = NUM_1 * NUM_2;
            } else if (SELECT === "/") {
                if (NUM_2 === 0) {
                    resultado = "Error: División por 0";
                } else {
                    resultado = NUM_1 / NUM_2;
                }
            }               
        //  Imprimir el resultado en pantalla
        RESULTADODISPLAY.innerText = `Resultado: ${resultado}`;
    }


