package co.tricket.apipayment.core;

import lombok.Builder;
import lombok.Data;

@Data
public class BuyTicketEvent {
    private String transactionId;
    private String participantId;
    private String ticketId;
}
