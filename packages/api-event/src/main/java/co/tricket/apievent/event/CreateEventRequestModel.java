package co.tricket.apievent.event;

import lombok.Data;

@Data
public class CreateEventRequestModel {
    private String title;
    private String image;
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
