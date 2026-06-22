package com.example.angular.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Person {

    @Id
    private Integer id;
    private String lastName;
    private String firstName;
    private String city;
}
