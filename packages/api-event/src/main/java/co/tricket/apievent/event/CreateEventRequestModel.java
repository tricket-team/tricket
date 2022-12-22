package co.tricket.apievent.event;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateEventRequestModel {
    private String title;
    private String description;
    private String startTime;
    private String endTime;
    private String type;
    private String slug;

    private String country;
    private String state;
    private String postalCode;
    private String address;
}
