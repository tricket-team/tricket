package co.tricket.apipayment.query;

import co.tricket.TicketEventGrpc;
import co.tricket.TicketEventRequest;
import co.tricket.TicketEventResponse;
import co.tricket.apipayment.model.BuyTicketEntity;
import co.tricket.apipayment.model.BuyTicketRepository;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PaymentQueryConsumer {
    @Autowired
    private BuyTicketRepository buyTicketRepository;

    @RabbitListener(queues = "getBuyTicketQueue")
    public List<BuyTicketEntity> getBuyTicket(String ticketId) {
        return this.buyTicketRepository.findBuyTicketByTicketId(ticketId);
    }

//    @RabbitListener(queues = "getBuyTicketByEventQueue")
//    public List<BuyTicketEntity> getBuyTicketByEventId(String eventId) {
//        ManagedChannel channel = ManagedChannelBuilder
//            .forAddress("localhost", 50052)
//            .usePlaintext()
//            .build();
//        TicketEventGrpc.TicketEventBlockingStub client = TicketEventGrpc.newBlockingStub(channel);
//        TicketEventRequest request = TicketEventRequest.newBuilder()
//            .setEventId(eventId)
//            .build();
//        TicketEventResponse response = client.getEventTickets(request);
//
//        List<BuyTicketEntity> buyTicketList = new ArrayList<>();
//
//        for (String ticket : response.getTicketsList()) {
//            for (BuyTicketEntity responseTicket : this.getBuyTicket(ticket)) {
//                buyTicketList.add(responseTicket);
//            }
//        }
//
//        return buyTicketList;
//    }
}
