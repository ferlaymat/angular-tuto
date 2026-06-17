package com.example.angular.service;

import com.example.angular.model.Person;
import com.example.angular.model.PersonFilterDTO;
import com.example.angular.repository.PersonRepository;
import com.example.angular.util.UserSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
public class PersonServiceImpl implements PersonService {

    private final PersonRepository userRepository;

    public Page<Person> getPersonPaginationList(int page, int size, String sorBy, String sortOrder, PersonFilterDTO filter){
        Sort sort = sortOrder.equalsIgnoreCase("Desc") ?
                Sort.by(sorBy).descending() : Sort.by(sorBy).ascending();
        PageRequest pageable = PageRequest.of(page, size, sort);
        Specification<Person> spec = UserSpecification.withFilters(filter);
        return userRepository.findAll(spec, pageable);

    }
}
