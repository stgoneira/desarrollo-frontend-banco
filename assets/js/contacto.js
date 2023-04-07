var Errores = {
    nombre: {valido: false, mensaje: ""},
    rut: {valido: false, mensaje: ""},
    telefono: {valido: false, mensaje: ""}
};


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

const iRut = document.querySelector("input#rut");
const mRut = document.querySelector("input#rut + span");
iRut.addEventListener('blur', (e) => {
    const rut = iRut.value;
    if( !Rut.validaRut(rut) ) {
        mRut.textContent = "RUT inválido!";
        mRut.classList.add("error");
        iRut.classList.add("error");
    } else {
        iRut.classList.remove("error");
        mRut.classList.remove("error");
        mRut.textContent = "";
    }
});
/*
const iNombre = document.querySelector("input#nombre");
const mNombre = document.querySelector("input#nombre + span");
iNombre.addEventListener('blur', (e) => {
    if( iNombre.value.length < 3 ) {
        mNombre.textContent = "Nombre muy corto";
        mNombre.classList.add("error");
        iNombre.classList.add("error");
    } else {
        iNombre.classList.remove("error");
        mNombre.classList.remove("error");
        mNombre.textContent = "";
    }
});
*/

// fnValidacion(vInput)
// fnValidación -> devuelve true cuando el valor es válido 
// fnValidación -> retorna un array [boolean, "mensaje..."]
function validaCampo(vInput, vSpan, fnValidacion) {
    vInput.addEventListener('blur', e => {
        const resultado = fnValidacion(vInput);
        if( ! resultado[0] ) {
            vSpan.textContent = resultado[1];
            vSpan.classList.add("error");
            vInput.classList.add("error");
        } else {
            vSpan.textContent = "";
            vSpan.classList.remove("error");
            vInput.classList.remove("error");
        }
    });
}

validaCampo(
    document.querySelector("#nombre"),
    document.querySelector("#nombre + span"),
    (vInput) => {        
        const textoInput = vInput.value;        
        if(textoInput.length < 3) {
            return [false, 'Nombre muy corto'];
        } else {
            return [true, ''];
        }
    }
);

// template string
const email = `
Querido ${usuario.nombre},

Lorem ipsum es de .... ${usuario.email} ....
`;

const fnValidacionTelefono = (vInput) => {        
    const textoInput = vInput.value;        
    if(textoInput.length < 3) {
        return [false, 'Telefono muy corto'];
    } else {
        return [true, ''];
    }
};

validaCampo(
    document.querySelector("#telefono"),
    document.querySelector("#telefono + span"),
    fnValidacionTelefono
);

/*
const iTelefono = document.querySelector("input#telefono");
const mTelefono = document.querySelector("input#telefono + span");
iTelefono.addEventListener('blur', (e) => {
    if( iTelefono.value.length < 3 ) {
        mTelefono.textContent = "Telefono muy corto";
        mTelefono.classList.add("error");
        iTelefono.classList.add("error");
    } else {
        iTelefono.classList.remove("error");
        mTelefono.classList.remove("error");
        mTelefono.textContent = "";
    }
});
*/

const sComuna = document.querySelector("select#comuna");
const mComuna = document.querySelector("select#comuna + span");
sComuna.addEventListener('blur', (e) => {
    if( sComuna.value == "" ) {
        mComuna.textContent = "Debe seleccionar una comuna";
        mComuna.classList.add("error");
    }
});

const btnEnviar = document.querySelector("button[type='submit']");
btnEnviar.addEventListener('submit', () => {
    
});
