package co.tricket.apievent;

import io.grpc.Server;
import io.grpc.ServerBuilder;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication(scanBasePackages = "co.tricket.apievent")
public class ApiEventApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiEventApplication.class, args);
        Server server = ServerBuilder
            .forPort(50052)
//        .addService(new MaxScoreServiceImpl())
            .build();

        try {
            server.start();
            System.out.println("GRPC Service Started");
        } catch (IOException e) {
            e.printStackTrace();
        }

        Runtime.getRuntime().addShutdownHook(new Thread(
            () -> {
                System.out.println("Received Shutdown Request");
                server.shutdown();
                System.out.println("Successfully Shutdown Server");
            }
        ));

        try {
            server.awaitTermination();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
