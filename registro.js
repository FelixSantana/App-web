exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    console.log("Estudiante recibido:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ mensaje: "Estudiante registrado" }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error en servidor" }),
    };
  }
};
