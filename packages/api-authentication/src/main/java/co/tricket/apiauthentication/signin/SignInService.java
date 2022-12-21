package co.tricket.apiauthentication.signin;

import co.tricket.apiauthentication.model.UserEntity;
import co.tricket.apiauthentication.model.UserRepository;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SignInService {
    @Autowired
    private UserRepository repository;

    public List<UserEntity> signIn() {
        try {
            UserRecord.UpdateRequest updateRequest = new UserRecord.UpdateRequest("3GGZMiuGcWh2yxI4rgud7dkpjEH3");
            updateRequest.setDisplayName("spicyzboss");
            UserRecord userRecord = FirebaseAuth.getInstance().updateUser(updateRequest);
            System.out.println("Successfully fetched user data: " + userRecord.getDisplayName());
        } catch (FirebaseAuthException exception) {
            exception.printStackTrace();
        }
        return (List<UserEntity>) this.repository.findAll();
    }
}
