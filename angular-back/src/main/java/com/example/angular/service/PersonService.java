package com.example.angular.service;

import com.example.angular.model.Person;
import com.example.angular.model.PersonFilterDTO;
import org.springframework.data.domain.Page;

public interface PersonService {

    Page<Person> getPersonPaginationList(int page, int size, String sorBy, String sortOrder, PersonFilterDTO filter);
}
