/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//txtIdNombre
	//txtIdEdad

	var tuNombre;
	var tuEdad;
	var tuApellido;

	tuNombre = txtIdNombre.value;
	tuEdad = txtIdEdad.value;
	tuApellido = prompt("Ingrese su apellido")

	//txtIdNombre.value = tuNombre;
	//txtIdEdad.value = tuEdad;
	alert("Usted se llama " + tuNombre + " " + tuApellido + " y tiene " + tuEdad + " años");
}


