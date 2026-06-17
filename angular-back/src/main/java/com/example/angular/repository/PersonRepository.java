package com.example.angular.repository;

import com.example.angular.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface PersonRepository extends JpaRepository<Person,Integer>, JpaSpecificationExecutor<Person> {
}
