
    var comenzar = document.querySelector('#btnEmpezar');


    var pregunta = ['¿En qué año empezó nuestro emprendimiento?'];
    
    comenzar.addEventListener('click', function() {
    
        var contenido = document.getElementById("question");
        contenido.innerHTML = pregunta[0];
       
    })
    
    
   
    var inicioIntentos = 0;
    
    function iniciar() {
    
        var rtaCorrecta = "2005";
       
    
    
        if (inicioIntentos >= 3) {
            swal("¡Perdiste! Nuestro emprendimiento empezó en 20 de agosto de 2005. Gracias por jugar!");
            document.getElementById("rta").disabled;
        }
    
        do {
            var txtUsuario = document.getElementById("rta").value;
    
            if (txtUsuario === rtaCorrecta) {
                swal("Felicitaciones! Ganaste un 25% en tu próxima compra! Aprovechalo con el código de descuento: FH2020");
            } else {
                inicioIntentos++;
            }
            if (inicioIntentos === 2) {
                swal("Mmmmm casi. Intentá nuevamente, te quedan dos intentos.... Pista: Ya pasaron 3x5 años")
            } else if (inicioIntentos === 3) {
                swal("Estás más cerca. Intentá nuevamente, te quedan un intento.... Pista: Ya pasaron 4x4-1 años");
            }
            break;
    
    
        } while (inicioIntentos <= 3);
   
    
    }
    if (inicioIntentos >= 3) {
        alert("Perdiste!");
        document.getElementById("rta").disabled;
}




