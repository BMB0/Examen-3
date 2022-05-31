
function cambioMonedas(monedas){
    let res = monedas;
    if (monedas - 5 >= 0){
        res = [5, monedas - 5];
        return res;
    }
    return res;
}

export default cambioMonedas;