package co.tricket.apiauthentication.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;

@Entity
@Table(name = "users")
@Data
public class UserEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = -6650736954735322112L;

    @Id
    @Column(unique = true)
    private String id;
    private String uid;
    private String firstName;
    private String lastName;
    private String email;
    private String birthDate;
    private String phoneNumber;

    public UserEntity() {

    }
}
