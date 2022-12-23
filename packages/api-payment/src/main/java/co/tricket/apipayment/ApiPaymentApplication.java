package co.tricket.apipayment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "co.tricket.apipayment")
public class ApiPaymentApplication {

  public static void main(String[] args) {
    SpringApplication.run(ApiPaymentApplication.class, args);
  }

}
