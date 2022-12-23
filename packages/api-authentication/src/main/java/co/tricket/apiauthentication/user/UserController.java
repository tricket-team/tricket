package co.tricket.apiauthentication.user;

import co.tricket.apiauthentication.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/me")
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping("")
    public ResponseEntity<UserEntity> getUser(@RequestHeader("Authorization") String token) {
        return this.service.getUser(token);
    }
}
