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

const sComuna = document.querySelector("select#comuna");
const mComuna = document.querySelector("select#comuna + span");
sComuna.addEventListener('blur', (e) => {
    if( sComuna.value == "" ) {
        mComuna.textContent = "Debe seleccionar una comuna";
        mComuna.classList.add("error");
    }
});
