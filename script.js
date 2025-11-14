const surveyJson = {
    pages: [
        {
            elements: [
                {
                    type: "html",
                    html: "<h4>Datos personales</h4>"
                },
                {
                    name: "Nombres",
                    title: "Nombres",
                    type: "text"
                },
                {
                    name: "Apellidos",
                    title: "Apellidos",
                    type: "text"
                },
                {
                    name: "Cedula",
                    title: "Cédula",
                    type: "text"
                },
                {
                    name: "Edad",
                    title: "Edad",
                    type: "text",
                    inputType: "number"
                },
                {
                    name: "Sexo",
                    title: "Sexo",
                    type: "radiogroup",
                    choices: [
                        { value: "Masculino", text: "Masculino" },
                        { value: "Femenino", text: "Femenino" }
                    ]
                },
                {
                    name: "Telefono",
                    title: "Teléfono",
                    type: "text"
                }
            ]
        },
        {
            elements: [
                {
                    type: "matrixdynamic",
                    name: "Familiares",
                    title: "Ingrese a sus familiares",
                    addRowText: "Agregar familiar",
                    removeRowText: "Eliminar",
                    columnMinWidth: "120px",
                    columns: [
                        {
                            name: "Nombre",
                            title: "Nombre",
                            cellType: "text"
                        },
                        {
                            name: "Parentezco",
                            title: "Parentezco",
                            cellType: "text"
                        },
                        {
                            name: "Edad",
                            title: "Edad",
                            cellType: "text",
                            inputType: "number"
                        }
                    ],
                    rowCount: 1
                }
            ]
        },
        {
            elements: [
                {
                    type: "matrixdynamic",
                    name: "Condiciones_pre_existentes",
                    title: "Condiciones Pre-Existentes",
                    addRowText: "Agregar condición",
                    removeRowText: "Eliminar",
                    columnMinWidth: "120px",
                    columns: [
                        {
                            name: "Enfermedad",
                            title: "Enfermedad",
                            cellType: "text"
                        },
                        {
                            name: "Tiempo_con_la_enfermedad",
                            title: "Tiempo con la enfermedad",
                            cellType: "text",
                            inputType: "number"
                        }
                    ],
                    rowCount: 1
                }
            ]
        },
        {
            elements: [
                {
                    type: "matrixdynamic",
                    name: "Internamientos_realizados",
                    title: "Internamientos realizados",
                    addRowText: "Agregar internamiento",
                    removeRowText: "Eliminar",
                    columnMinWidth: "120px",
                    columns: [
                        {
                            name: "Fecha",
                            title: "Fecha",
                            cellType: "text",
                            "inputType": "date"
                        },
                        {
                            name: "Centro_medico",
                            title: "Centro medico",
                            cellType: "text",
                        },
                        {
                            name: "Diagnostico",
                            title: "Diagnostico",
                            cellType: "comment",
                        }
                    ],
                    rowCount: 1
                }
            ]
        }
    ],
    showPreviewBeforeComplete: true,
    completedHtml: "Datos guardados correctamente",
    showPrevButton: true,
    pageNextText: "Siguiente",
    pagePrevText: "Anterior",
    previewText: "Verificar datos",
    completeText: "Enviar datos",
    showProgressBar: true,
    progressBarLocation: "top",
};

const survey = new Survey.Model(surveyJson);

document.addEventListener("DOMContentLoaded", function () {
    survey.render(document.getElementById("surveyContainer"));
});


//Guardando los datos en un objeto 
let respuestas = {};
survey.onComplete.add((sender) => {
    respuestas = sender.data;
    console.log(respuestas);
});
