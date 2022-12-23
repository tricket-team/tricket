package co.tricket.apipayment.command;

import co.tricket.apipayment.core.BuyTicketEvent;
import org.axonframework.commandhandling.CommandHandler;
import org.axonframework.eventsourcing.EventSourcingHandler;
import org.axonframework.modelling.command.AggregateIdentifier;
import org.axonframework.modelling.command.AggregateLifecycle;
import org.axonframework.spring.stereotype.Aggregate;
import org.springframework.beans.BeanUtils;

@Aggregate
public class PaymentAggregate {
    @AggregateIdentifier
    private String transactionId;
    private String ticketId;
    private String participantId;

    public PaymentAggregate() {
    }

    @CommandHandler
    public PaymentAggregate(BuyTicketCommand command) {
        if (command.getTicketId().isBlank() || command.getTicketId() == null) throw new IllegalArgumentException("ticketId cannot be empty");
        if (command.getParticipantId().isBlank() || command.getParticipantId() == null) throw new IllegalArgumentException("participantId cannot be empty");

        BuyTicketEvent event = new BuyTicketEvent();
        BeanUtils.copyProperties(command, event);
        AggregateLifecycle.apply(event);
    }

    @EventSourcingHandler
    public void on(BuyTicketEvent event) {
        this.transactionId = event.getTransactionId();
        this.participantId = event.getParticipantId();
        this.ticketId = event.getTicketId();
    }
}
