package co.tricket.apiauthentication.signin;

import lombok.Data;

@Data
public class SignInRequestModel {
    private String email;
    private String password;
}
