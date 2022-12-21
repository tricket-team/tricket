package co.tricket.apiauthentication.signin;

import co.tricket.apiauthentication.model.UserEntity;
import co.tricket.apiauthentication.model.UserRepository;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.auth.UserRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class SignInService {
    @Autowired
    private UserRepository repository;

    public ResponseEntity<String> signIn(String token) {
        try {
            FirebaseToken user = FirebaseAuth.getInstance().verifyIdToken(token);
            UserEntity userData = this.repository.findByUid(user.getUid());

            Map<String, Object> additionData = new HashMap<String, Object>();
            additionData.put("birthDate", userData.getBirthDate());

            String userToken = FirebaseAuth.getInstance().createCustomToken(user.getUid(), additionData);

            ResponseEntity<String> response = ResponseEntity.ok(userToken);
            return response;
        } catch (FirebaseAuthException exception) {
            exception.printStackTrace();
            return ResponseEntity.badRequest().body(null);
        }
    }
}
