package com.example.angular.controller;

import com.example.angular.model.Person;
import com.example.angular.model.PersonFilterDTO;
import com.example.angular.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/person")
public class PersonController {

    private final PersonService personService;

    @GetMapping
    public ResponseEntity<Page<Person>> getPersonList(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "lastName") String sortBy,
            @RequestParam(defaultValue = "asc") String sortOrder,
            @RequestParam(required = false) String lastName,
            @RequestParam(required = false) String firstName,
            @RequestParam(required = false) String city) {

        var filter = new PersonFilterDTO(lastName, firstName, city);

        return ResponseEntity.ok(
                personService.getPersonPaginationList(page, size, sortBy, sortOrder, filter)
        );
    }
}
