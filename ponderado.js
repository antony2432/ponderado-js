// const ciclo1 = [];

// ciclo1.push({
//     curso: "matematicas",
//     nota: 15,
//     creditos: 4,
// });
// ciclo1.push({
//     curso: "fisica",
//     nota: 16,
//     creditos: 5,
// });
// ciclo1.push({
//     curso: "redacion",
//     nota: 18,
//     creditos: 5,
// });
// ciclo1.push({
//     curso: "matematicas",
//     nota: 10,
//     creditos: 6,
// });
function promedioPonderado(lista) {
    //sacar los creditos en un nuevo array
    const creditos = lista.map(
        function (credito) {
            return credito.creditos;
        }
    );
    //sumo todos los creditos
    const sumaCredito = creditos.reduce(
        function (a = 0, b) {
            return a + b;
        }
    );
    // sacamos las notas de casa curso 
    const notas = lista.map(
        function(notas) {
            return notas.nota;
        }
    );
    //notas por creditos
    const notasXcreditos = [];

    for (let i = 0; i < lista.length; i++) {
        const ant = creditos[i] * notas[i]
        notasXcreditos.push(ant);
    }
    //suma de notas de creditos
    const sumaNxC = notasXcreditos.reduce(
        function (parametro1 = 0, parametro2) {
            return parametro1 + parametro2;
        }
    );
    //division de de las sumas con creditos
    let divicion = sumaNxC / sumaCredito;
    return divicion;
};

const lista = [];

function btnpromedio() {
    for (let i = 1; i < 6; i ++){
        let a = 'curso' + i;
        let b = 'nota' + i;
        let c = 'credito' + i;
        cur = document.getElementById(a).value;
        not = Number(document.getElementById(b).value);
        cre = Number(document.getElementById(c).value);
        lista.push({
            curso : cur,
            nota : not,
            creditos: cre,
        });
    }
    console.log(lista);
    const resultado = promedioPonderado(lista);
    console.log(resultado);
    
    const muestra = document.getElementById('ponderado');
    muestra.innerText = 'el promedio ponderado es: ' + resultado;
};