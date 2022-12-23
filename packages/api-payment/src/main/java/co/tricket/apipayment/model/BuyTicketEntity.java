package co.tricket.apipayment.model;

//import co.tricket.apiauthentication.model.UserEntity;
//import co.tricket.apievent.model.TicketEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;

@Entity
@Table(name = "event_ticket")
@Data
@Builder
@AllArgsConstructor
public class BuyTicketEntity implements Serializable {

    @Serial
    private static final long serialVersionUID = 3845468993349952526L;

    @Id
    @Column(unique = true)
    private String transactionId;
    private String participantId;
//    @ManyToOne
//    @JoinColumn(name = "participantId", referencedColumnName = "id", updatable = false, insertable = false)
//    private UserEntity participant;
    private String ticketId;
//    @ManyToOne
//    @JoinColumn(name = "ticketId", referencedColumnName = "id", updatable = false, insertable = false)
//    private TicketEntity ticket;

    public BuyTicketEntity() {

    }
}
