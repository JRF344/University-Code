Algoritmo sin_titulo
	recarga <- 0
	aniosCliente <- 0
	nombre = ""
	Escribir "Ingrese su nombre"
	Leer nombre
	Escribir 'Cuantos anios lleva como cliente'
	Leer aniosCliente
	Escribir 'Ingrese un monto de recarga'
	Leer recarga
	Si (recarga >= 2000 Y recarga < 3800) Y (aniosCliente > 1 Y aniosCliente < 3) Entonces
		recarga = recarga * 2
		Escribir "Su saldo se ha duplicado"
	SiNo
		Si ((recarga >= 3800 Y recarga < 5000) Y (aniosCliente > 3 Y aniosCliente < 5)) | aniosCliente >= 5 Entonces
			recarga = recarga * 3
			Escribir "Su saldo se ha triplicado"
		FinSi
	FinSi
	Escribir "Su monto de recarga es de ", recarga
FinAlgoritmo
