import cambioMonedas from "./cambioMonedas.js";

describe("Cambio de Monedas", () => {
    
    it("Para 5 deberia devolver 5", () => {
      let cambio = cambioMonedas(5);
  
      expect(cambio).toEqual(5);
    });

  }); 