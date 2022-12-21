package co.tricket.apievent.event;

import co.tricket.apievent.model.EventEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/event")
public class EventController {
    @Autowired
    private EventService eventService;

    @GetMapping("")
    public ResponseEntity<List<EventEntity>> getEvents() {
        return this.eventService.getEvents();
    }

    @PostMapping(value = "/create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<EventEntity> createEvent(@RequestParam("image") MultipartFile image, @RequestParam CreateEventRequestModel request) {
        return this.eventService.createEventWithVenue(request, image);
    }
}
