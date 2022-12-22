package co.tricket.apievent.ticket;

import co.tricket.apievent.model.TicketEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ticket")
public class TicketController {
    @Autowired
    private TicketService service;

    @GetMapping("/{eventId}")
    public ResponseEntity<TicketEntity[]> getTicketByEventId(@PathVariable String eventId) {
        return this.service.getTicketsByEventId(eventId);
    }

    @PostMapping("/create/{eventId}")
    public ResponseEntity<TicketEntity> createTicket(@RequestBody CreateTicketRequestModel request, @PathVariable String eventId) {
        if (eventId.isBlank()) return null;
        return this.service.createTicket(request, eventId);
    }

    @DeleteMapping("/delete/{ticketId}")
    public void deleteTicket(@PathVariable String ticketId) {
        if (ticketId.isBlank()) return;
        this.service.deleteTicket(ticketId);
    }
}
