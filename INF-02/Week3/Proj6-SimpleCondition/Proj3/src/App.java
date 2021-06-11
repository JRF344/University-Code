import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;

public class App {
    static BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
    static PrintStream out = System.out;
    public static void main(String[] args) throws IOException {
        int number = 0;
        out.println("Enter a number");

        number = Integer.parseInt( in.readLine() );

        if ( number < 0 ) {
            number = number * -1;
        }

        out.println("The resulting number is: " + number);

    }
}
