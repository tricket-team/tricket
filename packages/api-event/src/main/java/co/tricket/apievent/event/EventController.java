package co.tricket.apievent.event;

import co.tricket.apievent.model.EventEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "*")
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
    public ResponseEntity<EventEntity> createEvent(@RequestParam("image") MultipartFile image, @RequestParam String title, @RequestParam String description, @RequestParam String startTime, @RequestParam String endTime, @RequestParam String type, @RequestParam String slug, @RequestParam String country, @RequestParam String state, @RequestParam String postalCode, @RequestParam String address) {
        CreateEventRequestModel request = CreateEventRequestModel.builder()
            .title(title)
            .description(description)
            .startTime(startTime)
            .endTime(endTime)
            .type(type)
            .slug(slug)
            .country(country)
            .state(state)
            .postalCode(postalCode)
            .address(address)
            .build();
        return this.eventService.createEventWithVenue(request, image);
    }

    @DeleteMapping("/{eventId}")
    public void deleteEvent(@PathVariable String eventId) {
        this.eventService.deleteEventAndVenue(eventId);
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<EventEntity> getEventBySlug(@PathVariable String slug) {
        return this.eventService.getEventBySlug(slug);
    }
}
