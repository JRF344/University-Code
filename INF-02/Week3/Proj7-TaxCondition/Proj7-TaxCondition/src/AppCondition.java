
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintStream;

import java.io.*;

public class AppCondition {
    static BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
    static PrintStream out = System.out;
    public static void main(String[] args) throws IOException {
        System.out.println("\n" + "Introduzca su salario");
        double salario = Double.parseDouble(in.readLine());

        if (salario >= 1000000) {
            double salarioNeto = salario - (salario * 0.1);
            System.out.println("\n" + "Su salario es de " + salarioNeto);

        } else {

            System.out.println("\n" + "Su salario es de " + salario);
            
        }
    }
}