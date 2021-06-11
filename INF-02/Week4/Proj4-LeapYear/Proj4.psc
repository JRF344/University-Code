Algoritmo sin_titulo
	dia = 0
	mes = ""
	anio = 0
	Escribir "Ingrese un dia"
	Leer dia
	Escribir "Ingrese un mes"
	Leer mes
	Escribir "Ingrese un anio"
	Leer anio
	Si (anio % 4 = 0 | anio % 1000 = 0) & (anio % 100 <> 0) Entonces
		anioBiciesto = verdadero
		Escribir "El anio que ingreso es biciesto"
	SiNo
		anioBiciesto = falso
		Escribir "El anio no es biciesto"
	FinSi
	Si ((mes = "enero" | mes = "marzo" | mes = "mayo" | mes = "julio" | mes = "octubre" | mes = "diciembre") & dia <= 31) | ((mes = "abril" | mes = "junio" | mes = "setiembre" | mes = "noviembre") & dia <= 30) Entonces
		Escribir "La fecha que ingreso es valida"
	SiNo
		Si ((mes = "febrero" & anioBiciesto = Verdadero) & dia <= 29) | ((mes = "febrero" & anioBiciesto = Falso) & dia <= 28)
			Escribir "La fecha que ingreso es valida"
		SiNo
			Escribir "La fecha que ingreso es invalida"
		FinSi
	FinSi
FinAlgoritmo
