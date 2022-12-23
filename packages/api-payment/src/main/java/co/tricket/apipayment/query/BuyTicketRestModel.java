package co.tricket.apipayment.query;

import lombok.Data;

@Data
public class BuyTicketRestModel {
    private String transactionId;
    private String participantId;
    private String ticketId;
}
