package co.tricket.apiauthentication.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, String> {
    UserEntity findByUid(String uid);
}
