package co.tricket.apipayment.command;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BuyTicketRequestModel {
    private String participantId;
    private String ticketId;
}
