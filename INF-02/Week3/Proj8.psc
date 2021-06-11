Algoritmo sin_titulo
	matCount <- 0
	Escribir 'Introduzca el numero de materias que cursa'
	Leer matCount
	Si matCount=4 Entonces
		mat1 <- 0
		mat2 <- 0
		mat3 <- 0
		mat4 <- 0
		failcount <- 0
		Escribir 'Introduzca su nota para la primera materia'
		Leer mat1
		Escribir 'Introduzca su nota para la segunda materia'
		Leer mat2
		Escribir 'Introduzca su nota para la tercera materia'
		Leer mat3
		Escribir 'Introduzca su nota para la cuarta materia'
		Leer mat4
		Si mat1 > 70 Y mat2 > 70 Y mat3 > 70 Y mat4 > 70 Entonces
			avg <- (mat1 + mat2 + mat3 + mat4) / 4
		SiNo
			failcount <- 1
		FinSi
	SiNo
		failcount <- 1
	FinSi
	Si failcount <> 1 Entonces
		Si avg>=90 Entonces
			Si mat1>80 Y mat2>80 Y mat3>80 Y mat4>80 Entonces
				Escribir 'Usted califica para una beca'
			SiNo
				Escribir "Usted no califica para una beca"
			FinSi
		SiNo
			Definir assist Como Logico
			Escribir 'Fue asistente del profesor? (v/f)'
			Leer assist
			Si assist=verdadero Entonces
				Definir assistGrade Como Caracter
				Escribir 'Indique su calificacion como asistente'
				Leer assistGrade
				Si assistGrade<>C Y avg>=85 Entonces
					Escribir 'Usted es elegible para una beca'
				SiNo
					Escribir 'Usted no califica para una beca'
				FinSi
			SiNo
				Escribir 'usted no califica para una beca'
			FinSi
		FinSi
	SiNo
		Escribir 'Usted no califica para una beca'
	FinSi
FinAlgoritmo
