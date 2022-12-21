package co.tricket.apievent.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serial;
import java.io.Serializable;

@Entity
@Table(name = "venues")
@Data
@Builder
@AllArgsConstructor
public class VenueEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = -2650129078736920655L;

    @Id
    @Column(unique = true, nullable = false)
    private String id;
    private String country;
    private String state;
    private String postalCode;
    private String address;

    public VenueEntity() {

    }
}
