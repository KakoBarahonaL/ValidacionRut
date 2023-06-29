function Calcular() {
    let rut = document.getElementById("rut");
    let rutlimpio = rut.value.replace(/\./g, "").replace(/-/g, "");
    
    let suma = 0;
    let factor = 2;

    for (let i = rutlimpio.length - 1; i >= 0; i--) {
        suma += parseInt(rutlimpio.charAt(i)) * factor;
        console.log(suma);
        factor++;

        if (factor > 7) {
            factor = 2;
        }
    }

    let modulo = suma % 11;
    console.log(modulo);
    let digitoCalculado = 11 - modulo;
    console.log(digitoCalculado);

    let validacion = digitoCalculado === 11 ? '0' : digitoCalculado === 10 ? 'K' : digitoCalculado.toString();
    document.getElementById('validacion').textContent = validacion;
    
}