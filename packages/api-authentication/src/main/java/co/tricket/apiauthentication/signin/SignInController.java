package co.tricket.apiauthentication.signin;

import co.tricket.apiauthentication.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sign-in")
public class SignInController {
    @Autowired
    private SignInService service;

    @PostMapping("")
    public List<UserEntity> signIn() {
        return this.service.signIn();
    }
}
