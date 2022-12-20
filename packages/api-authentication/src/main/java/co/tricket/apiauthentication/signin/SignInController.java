package co.tricket.apiauthentication.signin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sign-in")
public class SignInController {

    @PostMapping("")
    public String SignIn() {
        return "Noice";
    }
}
