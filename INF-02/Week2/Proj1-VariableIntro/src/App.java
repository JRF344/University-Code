import java.io.*;

public class App {
    static BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
    static PrintStream out = System.out;
    static final double PI = 3.14159; //simulates a constant
    public static void main(String[] args) throws Exception {
        int wholeNumber = 7;
        float roundedDecimals = 1.5f; //f indicates it's a float, otherwise it may interpret it as a double
        double fullDecimals = 1.5; //d can be used to similar effect as f
        char letter ='z'; //single quotes
        boolean truFlse = true;
        String peopleName = "Brian"; //double quotes
    
        fullDecimals = ((20+12+19+23+24) / 5.0) * PI; 
        //fullDecimals = (20+12+19+23+24) / 5d; 

        //This cannot be assigned again since it's a final
        //PI = 0; 

        out.println(wholeNumber);
        out.println(roundedDecimals);
        out.println(fullDecimals);
        out.println(letter);
        out.println(truFlse);
        out.println(peopleName);
        out.println(peopleName.toUpperCase());
        out.println(peopleName.toLowerCase());
    }
}
