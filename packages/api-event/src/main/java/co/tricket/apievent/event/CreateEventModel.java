package co.tricket.apievent.event;

import co.tricket.apievent.model.VenueEntity;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateEventModel {
    private String title;
    private String image;
    private String description;
    private String startTime;
    private String endTime;
    private String type;
    private String slug;
    private VenueEntity venue;
}
