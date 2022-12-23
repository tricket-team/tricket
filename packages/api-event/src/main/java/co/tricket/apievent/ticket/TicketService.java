package co.tricket.apievent.ticket;

import co.tricket.apievent.model.TicketEntity;
import co.tricket.apievent.model.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    public ResponseEntity<List<TicketEntity>> getTicketsByEventId(String eventId) {
        return ResponseEntity.ok(this.ticketRepository.getTicketByEventId(eventId));
    }

    public ResponseEntity<TicketEntity> createTicket(CreateTicketRequestModel model, String eventId) {
        String ticketId = UUID.randomUUID().toString();
        TicketEntity ticket = TicketEntity.builder()
            .id(ticketId)
            .eventId(eventId)
            .title(model.getTitle())
            .date(model.getDate())
            .price(model.getPrice())
            .build();
        return ResponseEntity.ok(ticketRepository.save(ticket));
    }

    public void deleteTicket(String ticketId) {
        this.ticketRepository.deleteById(ticketId);
    }
}
