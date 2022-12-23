package co.tricket.apipayment.command;

import lombok.Builder;
import lombok.Data;
import org.axonframework.modelling.command.TargetAggregateIdentifier;

@Data
@Builder
public class BuyTicketCommand {
    @TargetAggregateIdentifier
    private String transactionId;
    private String ticketId;
    private String participantId;
}
