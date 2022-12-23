package co.tricket.apievent.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;

@Entity
@Table(name = "events")
@Data
@Builder
@AllArgsConstructor
public class EventEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = 5874269277155476421L;

    @Id
    @Column(unique = true, nullable = false)
    private String id;
    private String title;
    private String image;
    @Lob
    private String description;
    private String startTime;
    private String endTime;
    private String type;
    private String slug;

    private String venueId;
    @OneToOne(optional = false)
    @JoinColumn(name = "venueId", referencedColumnName = "id", insertable = false, updatable = false)
    private VenueEntity venue;

    public EventEntity() {

    }
}
