Algoritmo sin_titulo
	edad = 0
	Escribir "Ingrese edad de roca en millones de anios"
	Leer edad
	Si edad < 65.5 Entonces
		Escribir "Cenozoica"
	SiNo
		Si edad < 251 Entonces
			Escribir "Mesozoica"
		SiNo
			Si edad < 542 Entonces
				Escribir "Paleozoica"
			SiNo
				Si edad >= 542 Entonces
					Escribir "Pre-Paleozoica"
				SiNo
					Escribir "ERR"
				FinSi
			FinSi
		FinSi
	FinSi
FinAlgoritmo
