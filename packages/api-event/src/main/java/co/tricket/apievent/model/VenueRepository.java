package co.tricket.apievent.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface VenueRepository extends CrudRepository<VenueEntity, String> {

}
