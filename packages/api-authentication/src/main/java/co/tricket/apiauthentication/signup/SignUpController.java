package co.tricket.apiauthentication.signup;

import co.tricket.apiauthentication.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/sign-up")
public class SignUpController {
    @Autowired
    private SignUpService service;

    @PostMapping("")
    public ResponseEntity<UserEntity> signUp(@RequestBody SignUpRequestModel request) {
        return this.service.signUp(request);
    }
}
