import fs from "fs";

describe("VISTAS", () => {
    beforeAll(() => {
      document.body.innerHTML = fs.readFileSync("index.html", "utf8");
      //require("./presenter.js");
    });
  
    it("Mostrar 'Monto venta:' en la pantalla", () => {
      let montoText = document.querySelector("#monto-venta");
  
      expect(montoText.innerHTML).toEqual("Monto venta:");
    });

    it("Mostrar 'Monto efectivo:' en la pantalla" , () => {
        let efectivoText = document.querySelector("#monto-efectivo");
        expect(efectivoText.innerHTML).toEqual("Monto efectivo:");
    });

/*
    it("Mostrar el cambio como 5 si el monto de venta es 5 y el efectivo es 10" , () => {
        let montoText = document.querySelector("#monto-venta-input");
        montoText.value = 5;
        let efectivoText = document.querySelector("#monto-efectivo-input");
        efectivoText.value = 10;
        let botonCambio = document.querySelector("#cambio-boton");
        botonCambio.click();
        expect(efectivoText.innerHTML).toEqual("Monto efectivo:");
    });*/
  });  