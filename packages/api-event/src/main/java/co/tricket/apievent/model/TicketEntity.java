package co.tricket.apievent.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name = "tickets")
@Data
@Builder
@AllArgsConstructor
public class TicketEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = -2837263370084603758L;

    @Id
    @Column(unique = true, nullable = false)
    private String id;
    private String title;
    private String date;
    private BigDecimal price;

    private String eventId;
    @ManyToOne
    @JoinColumn(name = "eventId", referencedColumnName = "id", updatable = false, insertable = false)
    private EventEntity event;

    public TicketEntity() {

    }
}
