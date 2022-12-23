package co.tricket.apipayment.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BuyTicketRepository extends CrudRepository<BuyTicketEntity, String> {
    List<BuyTicketEntity> findBuyTicketByTicketId(String ticketId);
}
