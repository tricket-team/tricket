package co.tricket.apiauthentication.user;

import co.tricket.apiauthentication.model.UserEntity;
import co.tricket.apiauthentication.model.UserRepository;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public ResponseEntity<UserEntity> getUser(String token) {
        try {
            FirebaseToken user = FirebaseAuth.getInstance().verifyIdToken(token);
            return ResponseEntity.ok(this.repository.findByUid(user.getUid()));
        } catch (FirebaseAuthException e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().body(null);
        }
    }
}
