package co.tricket.apievent.event;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateVenueModel {
    private String country;
    private String state;
    private String postalCode;
    private String address;
}
