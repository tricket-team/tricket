package co.tricket.apiauthentication.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, String> {
    UserEntity findByEmail(String email);
    UserEntity findByUid(String uid);
}
