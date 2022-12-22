package co.tricket.apievent.ticket;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
public class CreateTicketRequestModel {
    private String title;
    private String date;
    private BigDecimal price;
}
