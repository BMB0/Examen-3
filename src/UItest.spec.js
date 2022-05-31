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
  });  