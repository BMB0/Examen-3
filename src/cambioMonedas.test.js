import cambioMonedas from "./cambioMonedas.js";

describe("Cambio de Monedas", () => {
    
    it("Para 5 deberia devolver 5", () => {
      let cambio = cambioMonedas(5);
  
      expect(cambio[0]).toEqual(5);
    });

    it("Para 7 deberia devolver 5 y 2", () => {
        let cambio = cambioMonedas(7);
    
        expect(cambio[0]).toEqual(5);
        expect(cambio[1]).toEqual(2);
      });

  }); 