package co.tricket.apipayment.query;

import co.tricket.apipayment.model.BuyTicketEntity;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/payment")
public class PaymentQueryController {
    @Autowired
    private RabbitTemplate rabbit;

    @GetMapping("/ticket/{ticketId}")
    public List<BuyTicketEntity> getBuyTicketByTicketId(@PathVariable String ticketId) {
        return (List<BuyTicketEntity>) rabbit.convertSendAndReceive("APIPaymentDirect", "getTicket", ticketId);
    }

    @GetMapping("/event/{eventId}")
    public List<BuyTicketEntity> getBuyTicketByEventId(@PathVariable String eventId) {
        return null;
    }
}
