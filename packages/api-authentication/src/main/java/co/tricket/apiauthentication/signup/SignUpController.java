package co.tricket.apiauthentication.signup;

import co.tricket.apiauthentication.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
