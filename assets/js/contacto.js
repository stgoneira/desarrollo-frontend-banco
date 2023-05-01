var Rut = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto) {
		rutCompleto = rutCompleto.replaceAll(".","");
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;        
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];                
		if ( digv == 'K' ) digv = 'k' ;
		
		return (Rut.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}

/**
 * 
 * @param {*} valor 
 * @param {HTMLFormElement} elementoForm 
 * @param {HTMLElement} elementoMsje 
 * @param {Function} fnValidacion - función que retorna true si es válido y false en caso contrario 
 */
function valida(valor, elementoForm, elementoMsje, fnValidacion) {
    try {
        fnValidacion(valor);
        elementoForm.classList.remove("error");
        elementoMsje.classList.remove("error");
        elementoMsje.textContent = "";
        return false;
    } catch (error) {
        elementoForm.classList.add("error");
        elementoMsje.classList.add("error");
        elementoMsje.textContent = error.message;
    }
}

const nombreInputElement = document.querySelector("#nombre");
const nombreSpanElement  = document.querySelector("#nombre + span");
nombreInputElement.addEventListener('input', (evento) => {
    validaNombre();
});
const validaNombre = () => {    
    valida(nombreInputElement.value, nombreInputElement, nombreSpanElement, (valor) => {
        if(valor.length < 3) {
            throw new Error("Nombre demasiado corto");
        }
        return true;
    });
}

/* --------------------------------- */
const rutInputElement = document.querySelector("#rut");
const rutSpanElement  = document.querySelector("#rut + span");
rutInputElement.addEventListener('input', (evento) => {
    validaRut();
});
const validaRut = () => {    
    valida(rutInputElement.value, rutInputElement, rutSpanElement, (valor) => {
        const rutLimpio = valor.replaceAll('.', '');

        if(rutLimpio.length < 8) {
            throw new Error("RUT demasiado corto");
        }

        if( !Rut.validaRut(rutLimpio) ) {
            throw new Error("RUT no válido!");
        }
        return true;
    });
}

/* --------------------------------- */
const telefonoInputElement = document.querySelector("#telefono");
const telefonoSpanElement  = document.querySelector("#telefono + span");
telefonoInputElement.addEventListener('input', (evento) => {
    validaTelefono();
});
const validaTelefono = () => {    
    valida(telefonoInputElement.value, telefonoInputElement, telefonoSpanElement, (valor) => {
        if(valor.length != 9) {
            throw new Error("El teléfono debe ser de 9 dígitos");
        }

        if( ! /^[0-9]+$/.test(valor) ) {
            throw new Error("Sólo debe contener números!");
        }
        return true;
    });
}
/* --------------------------------- */
const emailInputElement = document.querySelector("#email");
const emailSpanElement  = document.querySelector("#email + span");
emailInputElement.addEventListener('input', (evento) => {
    validaEmail();
});
const validaEmail = () => {
    valida(emailInputElement.value, emailInputElement, emailSpanElement, (valor) => {        
        const regex     = /\S+@\S+\.[a-zA-Z]{2,}$/i;
        const resultado = regex.test(valor);
        if( !resultado ) throw new Error("Email inválido");
        return true;
    });
}
/* --------------------------------- */
const direccionInputElement = document.querySelector("#direccion");
const direccionSpanElement  = document.querySelector("#direccion + span");
direccionInputElement.addEventListener('input', (evento) => {
    validaDireccion();
});
const validaDireccion = () => {    
    valida(direccionInputElement.value, direccionInputElement, direccionSpanElement, (valor) => {
        if(valor.length < 5) {
            throw new Error("Dirección demasiado corta!");
        }
        return true;
    });
};
/* --------------------------------- */
const comunaSelectElement = document.querySelector("#comuna");
const comunaSpanElement  = document.querySelector("#comuna + span");
comunaSelectElement.addEventListener('input', (evento) => {
    validaComuna();
});
const validaComuna = () => {    
    valida(comunaSelectElement.value, comunaSelectElement, comunaSpanElement, (valor) => {
        if(valor.length < 1) {
            throw new Error("Debe seleccionar una comuna!");
        }
        return true;
    });
};
/* --------------------------------- */
const motivoSelectElement   = document.querySelector("#motivo");
const motivoSpanElement     = document.querySelector("#motivo + span");
motivoSelectElement.addEventListener('input', (evento) => {
    validaMotivo();
});
const validaMotivo = () => {    
    valida(motivoSelectElement.value, motivoSelectElement, motivoSpanElement, (valor) => {
        if(valor.length < 1) {
            throw new Error("Debe seleccionar un motivo!");
        }
        return true;
    });
};
/* --------------------------------- */
const mensajeTextareaElement    = document.querySelector("#mensaje");
const mensajeSpanElement        = document.querySelector("#mensaje + span");
mensajeTextareaElement.addEventListener('input', (evento) => {
    validaMensaje();
});
const validaMensaje = () => {    
    valida(mensajeTextareaElement.value, mensajeTextareaElement, mensajeSpanElement, (valor) => {
        if(valor.length < 10) {
            throw new Error("Mensaje demasiado corto!");
        }
        return true;
    });
};


/* --------------------------------- */
document.querySelector('form').addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();

    const botonSubmit = document.querySelector('button[type="submit"');
    botonSubmit.disabled = true;

    setTimeout(() => botonSubmit.disabled = false, 15000);

    validaNombre();    
    validaRut();    
    validaTelefono();    
    validaEmail();
    validaDireccion();    
    validaComuna();
    validaMotivo();
    validaMensaje();
    
   const errores = document.querySelectorAll("span.error").length;
   const elementosMuestraMensaje = document.querySelectorAll("form p.mensaje-form");
   if(errores > 0) {
        elementosMuestraMensaje.forEach(e => e.textContent = `Hay ${errores} error(es) por resolver.`);
   } else {
        elementosMuestraMensaje.forEach(e => e.textContent = "Enviando...");
   }

   const nombre     = nombreInputElement.value;
   const rut        = rutInputElement.value;
   const telefono   = telefonoInputElement.value;
   const email      = emailInputElement.value;
   const direccion  = direccionInputElement.value;
   const comuna     = comunaSelectElement.value;
   const motivo     = motivoSelectElement.value;
   const mensaje    = mensajeTextareaElement.value;

   const contacto = {
    nombre,
    rut,
    telefono,
    email,
    direccion,
    comuna,
    motivo,
    mensaje
   };
   console.dir(contacto);

   const baseUrl    = getBaseUrl();
   const url        = baseUrl + '/contacto';
   
   try {
    const respuesta = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(contacto)
    }); 
    const datos = await respuesta.json();
    console.log("Contacto guardado, actualizar mensaje form ....");
    elementosMuestraMensaje.forEach(e => e.textContent = "Pronto nos comunicaremos contigo, gracias por confiar en Data Bank.");
   } catch (error) {
    console.error(error.message);
   }
   
});