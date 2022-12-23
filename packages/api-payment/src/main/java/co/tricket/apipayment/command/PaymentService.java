package co.tricket.apipayment.command;

import co.tricket.apipayment.model.BuyTicketEntity;
import co.tricket.apipayment.model.BuyTicketRepository;
import org.axonframework.commandhandling.gateway.CommandGateway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PaymentService {
    @Autowired
    private CommandGateway commandGateway;

    public ResponseEntity<BuyTicketCommand> buyTicket(String ticketId, String participantId) {
        BuyTicketCommand command = BuyTicketCommand.builder()
            .transactionId(UUID.randomUUID().toString())
            .ticketId(ticketId)
            .participantId(participantId)
            .build();
        try {
            commandGateway.sendAndWait(command);
            return ResponseEntity.ok(command);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.internalServerError().body(null);
        }
    }
}
