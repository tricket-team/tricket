package co.tricket.apiauthentication.signup;

import lombok.Data;

@Data
public class SignUpRequestModel {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String birthDate;
    private String phoneNumber;
}
