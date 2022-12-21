package co.tricket.apiauthentication.signin;

import co.tricket.apiauthentication.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/sign-in")
public class SignInController {
    @Autowired
    private SignInService service;

    @PostMapping("")
    public ResponseEntity<String> signIn(@RequestHeader("Authorization") String token) {
        return this.service.signIn(token);
    }
}
