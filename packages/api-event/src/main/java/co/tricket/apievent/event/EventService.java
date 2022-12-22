package co.tricket.apievent.event;

import co.tricket.apievent.model.EventEntity;
import co.tricket.apievent.model.EventRepository;
import co.tricket.apievent.model.VenueEntity;
import co.tricket.apievent.model.VenueRepository;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.core.waiters.WaiterResponse;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.DeleteObjectRequest;
import software.amazon.awssdk.services.s3.model.HeadObjectRequest;
import software.amazon.awssdk.services.s3.model.HeadObjectResponse;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.waiters.S3Waiter;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private VenueRepository venueRepository;

    public ResponseEntity<List<EventEntity>> getEvents() {
        List<EventEntity> events = (List<EventEntity>) this.eventRepository.findAll();
        ResponseEntity<List<EventEntity>> response = ResponseEntity.ok(events);
        return response;
    }

    public ResponseEntity<EventEntity> createEventWithVenue(CreateEventRequestModel model, MultipartFile image) {
        CreateVenueModel venueModel = CreateVenueModel.builder()
            .country(model.getCountry())
            .state(model.getState())
            .address(model.getAddress())
            .postalCode(model.getPostalCode())
            .build();
        VenueEntity venue = this.createVenue(venueModel).getBody();

        CreateEventModel eventModel = CreateEventModel.builder()
            .title(model.getTitle())
            .type(model.getType())
            .description(model.getDescription())
            .startTime(model.getStartTime())
            .endTime(model.getEndTime())
            .slug(model.getSlug())
            .venue(venue)
            .build();
        EventEntity event = this.createEvent(eventModel, image).getBody();
        return ResponseEntity.ok(event);
    }

    public ResponseEntity<EventEntity> createEvent(CreateEventModel model, MultipartFile image) {
        String eventId = UUID.randomUUID().toString();
        String imageUrl = this.saveEventImage(eventId, image).getBody();
        EventEntity event = EventEntity.builder()
            .id(eventId)
            .title(model.getTitle())
            .type(model.getType())
            .description(model.getDescription())
            .startTime(model.getStartTime())
            .endTime(model.getEndTime())
            .slug(model.getSlug())
            .venue(model.getVenue())
            .image(imageUrl)
            .venueId(model.getVenue().getId())
            .build();
        return ResponseEntity.ok(this.eventRepository.save(event));
    }

    public ResponseEntity<VenueEntity> createVenue(CreateVenueModel model) {
        VenueEntity venue = VenueEntity.builder()
            .id(UUID.randomUUID().toString())
            .state(model.getState())
            .country(model.getCountry())
            .address(model.getAddress())
            .postalCode(model.getPostalCode())
            .build();
        return ResponseEntity.ok(this.venueRepository.save(venue));
    }

    public ResponseEntity<String> saveEventImage(String eventId, MultipartFile image) {
        try {
            String sourceFileExtension = FilenameUtils.getExtension(image.getOriginalFilename());
            String fileName = eventId + "." + sourceFileExtension;
            String bucketName = "tricket-team";
            S3Client client = S3Client.builder().build();
            PutObjectRequest request = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(fileName)
                .build();
            client.putObject(request, RequestBody.fromBytes(image.getBytes()));

            S3Waiter waiter = client.waiter();
            HeadObjectRequest requestWait = HeadObjectRequest.builder()
                .bucket(bucketName)
                .key(fileName).build();

            WaiterResponse<HeadObjectResponse> waiterResponse = waiter.waitUntilObjectExists(requestWait);
            waiterResponse.matched().response().ifPresent(System.out::println);

            String fileUrl = "https://tricket-team.s3.ap-southeast-1.amazonaws.com/" + fileName;
            return ResponseEntity.ok(fileUrl);
        } catch (IOException e) {
            System.out.println(e.getMessage());
            return ResponseEntity.internalServerError().body(null);
        }
    }

    public void deleteEventAndVenue(String eventId) {
        EventEntity event = this.eventRepository.findEventById(eventId);
        this.deleteEvent(eventId);
        this.deleteVenue(event.getVenueId());
    }

    public void deleteEvent(String eventId) {
        try {
            EventEntity event = this.eventRepository.findEventById(eventId);

            S3Client client = S3Client.builder().build();
            String bucketName = "tricket-team";
            String fileName = event.getImage().replaceFirst("(https://tricket-team.s3.ap-southeast-1.amazonaws.com/)", "");

            DeleteObjectRequest request = DeleteObjectRequest.builder()
                .bucket(bucketName)
                .key(fileName)
                .build();
            client.deleteObject(request);

            this.eventRepository.deleteById(eventId);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public void deleteVenue(String venueId) {
        this.venueRepository.deleteById(venueId);
    }
}
