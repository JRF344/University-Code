Algoritmo sin_titulo
	Escribir "Escriba su salario"
	salario = 0
	Leer salario
	Si salario >= 1000000 Entonces
		salarioNeto = salario - (salario * 0.1)
		Escribir "Su salario es de " , salarioNeto
	SiNo
		Escribir "Su salario es de ", salario
	FinSi
FinAlgoritmo
