package co.tricket.apipayment.query;

//import co.tricket.apievent.model.TicketRepository;
import co.tricket.apipayment.model.BuyTicketEntity;
import co.tricket.apipayment.model.BuyTicketRepository;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentQueryConsumer {
    @Autowired
    private BuyTicketRepository buyTicketRepository;

    @RabbitListener(queues = "getBuyTicketQueue")
    public List<BuyTicketEntity> getBuyTicket(String ticketId) {
        return this.buyTicketRepository.findBuyTicketByTicketId(ticketId);
    }
}
