package co.tricket.apievent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "co.tricket.apievent")
public class ApiEventApplication {

  public static void main(String[] args) {
    SpringApplication.run(ApiEventApplication.class, args);
  }

}
