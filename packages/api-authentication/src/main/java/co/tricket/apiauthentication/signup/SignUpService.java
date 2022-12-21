package co.tricket.apiauthentication.signup;

import co.tricket.apiauthentication.model.UserEntity;
import co.tricket.apiauthentication.model.UserRepository;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class SignUpService {
    @Autowired
    private UserRepository repository;

    public ResponseEntity<UserEntity> signUp(SignUpRequestModel model) {
        try {
            UserRecord.CreateRequest createRequest = new UserRecord.CreateRequest();
            createRequest.setEmail(model.getEmail());
            createRequest.setPassword(model.getPassword());
            createRequest.setPhoneNumber(model.getPhoneNumber());
            createRequest.setDisplayName(model.getFirstName() + " " + model.getLastName());

            UserRecord userRecord = FirebaseAuth.getInstance().createUser(createRequest);
            System.out.println("Successfully created user: " + userRecord.getUid() + " (" + userRecord.getDisplayName() + ")");

            UserEntity user = UserEntity.builder()
                .id(UUID.randomUUID().toString())
                .uid(userRecord.getUid())
                .firstName(userRecord.getDisplayName().split(" ")[0])
                .lastName(userRecord.getDisplayName().split(" ")[1])
                .email(userRecord.getEmail())
                .phoneNumber(userRecord.getPhoneNumber())
                .birthDate(model.getBirthDate())
                .build();

            ResponseEntity<UserEntity> response = ResponseEntity.ok(this.repository.save(user));

            return response;
        } catch (Exception exception) {
            System.out.println(exception.getMessage());
            return ResponseEntity.badRequest().body(null);
        }
    }
}
