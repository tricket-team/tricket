package co.tricket.apipayment.command;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/checkout")
public class PaymentController {
    @Autowired
    private PaymentService service;

    @PostMapping("/ticket")
    public ResponseEntity<BuyTicketCommand> buyTicket(@RequestBody BuyTicketRequestModel request) {
        return this.service.buyTicket(request.getTicketId(), request.getParticipantId());
    }
}
