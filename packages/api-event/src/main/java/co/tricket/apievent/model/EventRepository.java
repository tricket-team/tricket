package co.tricket.apievent.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;

@Transactional
@Repository
public interface EventRepository extends CrudRepository<EventEntity, String> {
    EventEntity findEventById(String id);
    EventEntity findEventBySlug(String slug);
}
