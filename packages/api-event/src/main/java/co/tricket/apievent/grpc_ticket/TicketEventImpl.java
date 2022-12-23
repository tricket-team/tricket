package co.tricket.apievent.grpc_ticket;

import co.tricket.TicketEventGrpc;
import co.tricket.TicketEventRequest;
import co.tricket.TicketEventResponse;
import co.tricket.apievent.model.TicketEntity;
import co.tricket.apievent.model.TicketRepository;
import io.grpc.stub.StreamObserver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class TicketEventImpl extends TicketEventGrpc.TicketEventImplBase {
    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public void getEventTickets(TicketEventRequest request, StreamObserver<TicketEventResponse> responseObserver) {
        List<TicketEntity> tickets = this.getTicketsByEventId(request.getEventId());
        List<String> responseTickets = new ArrayList<>();
        for (TicketEntity ticket : tickets) {
            responseTickets.add(ticket.getId());
        }

        TicketEventResponse response = TicketEventResponse
            .newBuilder()
            .addAllTickets(responseTickets)
            .build();

        responseObserver.onNext(response);
    }

    public List<TicketEntity> getTicketsByEventId(String eventId) {
        return this.ticketRepository.getTicketByEventId(eventId);
    }
}
