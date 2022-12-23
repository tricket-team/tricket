package co.tricket.apipayment.query;

import co.tricket.apipayment.core.BuyTicketEvent;
import co.tricket.apipayment.model.BuyTicketEntity;
import co.tricket.apipayment.model.BuyTicketRepository;
import org.axonframework.eventhandling.EventHandler;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BuyTicketEventHandler {
    @Autowired
    private BuyTicketRepository ticketRepository;

    @EventHandler
    public void on(BuyTicketEvent event) {
        BuyTicketEntity entity = new BuyTicketEntity();
        BeanUtils.copyProperties(event, entity);
        this.ticketRepository.save(entity);
    }
}
