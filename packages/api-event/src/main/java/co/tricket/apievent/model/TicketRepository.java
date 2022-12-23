package co.tricket.apievent.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends CrudRepository<TicketEntity, String> {
    List<TicketEntity> getTicketByEventId(String eventId);
}
