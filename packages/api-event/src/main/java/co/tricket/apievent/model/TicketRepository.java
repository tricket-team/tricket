package co.tricket.apievent.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface TicketRepository extends CrudRepository<TicketEntity, String> {
    List<TicketEntity> getTicketByEventId(String eventId);
}
