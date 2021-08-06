describe("Pruebas en el archivo demo.test.js", () => {
  
    test("Ambos string deben ser iguales", () => {
    //1.- Inicializacion
    const msj = "Hola mundo";

    //2.- Estimulo

    const msj2 = `HOLA MUNDO`;

    //3- Observar el comportamiento

    expect(msj.toLowerCase()).toBe(msj2.toLowerCase());
    });
    
});
