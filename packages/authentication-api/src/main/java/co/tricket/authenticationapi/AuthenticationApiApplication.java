package co.tricket.authenticationapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "co.tricket")
public class AuthenticationApiApplication {

  public static void main(String[] args) {
    SpringApplication.run(AuthenticationApiApplication.class, args);
  }

}
