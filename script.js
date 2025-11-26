//cargando formulario para ingresar datos
const surveyJson = {
    elements: [
        {
            type: "matrixdynamic",
            name: "Materias",
            addRowText: "Agregar materia",
            removeRowText: "Eliminar",
            columnMinWidth: "120px",
            columns: [
                {
                    name: "Nombre",
                    title: "Nombre",
                    cellType: "text"
                },
                {
                    name: "Aprobados",
                    title: "Aprobados",
                    cellType: "text",
                    inputType: "number"
                },
                {
                    name: "Reprobados",
                    title: "Reprobados",
                    cellType: "text",
                    inputType: "number"
                }
            ],
            rowCount: 1
        }
    ],
    completeText: "Generar grafico",
    showCompletedPage: false
};

const survey = new Survey.Model(surveyJson);

document.addEventListener("DOMContentLoaded", function () {
    survey.render(document.getElementById("surveyContainer"));
});

//Generando grafico a partir de los datos
let respuestas = {};
survey.onCompleting.add(function(sender, options) {
    options.allowComplete = false;
    //Capturando datos
    respuestas = sender.data;
    let arrayMaterias = [];
    let arrayAprobados = [];
    let arrayReprobados = [];
    respuestas.Materias.forEach(element => {
        arrayMaterias.push(element.Nombre);
        arrayAprobados.push(element.Aprobados);
        arrayReprobados.push(element.Reprobados);
    });

    //Generando grafico
    const chart = Highcharts.chart('grafico', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Estudiantes aprobados y reprobados por materia'
        },
        xAxis: {
            title:{
                text: 'Materia'
            },
            categories: arrayMaterias
        },
        yAxis: {
            title: {
                text: 'Cantidad de estudiantes'
            }
        },
        series: [{
            name: 'Aprobados',
            data: arrayAprobados
        }, {
            name: 'Reprobados',
            data: arrayReprobados
        }]
    });
});
