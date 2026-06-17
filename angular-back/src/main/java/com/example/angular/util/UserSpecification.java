package com.example.angular.util;

import com.example.angular.model.Person;
import com.example.angular.model.PersonFilterDTO;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class UserSpecification {

    public static Specification<Person> withFilters(PersonFilterDTO filter) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (StringUtils.hasText(filter.lastName())) {
                predicates.add(cb.like(
                    cb.lower(root.get("lastName")),
                        cb.literal("%" + filter.lastName().toLowerCase() + "%")
                ));
            }
            if (StringUtils.hasText(filter.firstName())) {
                predicates.add(cb.like(
                    cb.lower(root.get("firstName")),
                        cb.literal("%" + filter.firstName().toLowerCase() + "%")
                ));
            }
            if (StringUtils.hasText(filter.city())) {
                predicates.add(cb.like(
                    cb.lower(root.get("city")),
                        cb.literal("%" + filter.city().toLowerCase() + "%")
                ));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}