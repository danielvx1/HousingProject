package com.hu4h.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "properties")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "address", unique = true)
    private String address;

    @Column(name = "landlord_email")
    private String landlordEmail;

    @Column(name = "landlord_phone_number")
    private String landlordPhoneNumber;

    @Column(name = "number_of_bedrooms")
    private Integer numberOfBedrooms;

    @Column(name = "number_of_bathrooms")
    private Integer numberOfBathrooms;

    @Column(name = "type_of_property")
    private String typeOfProperty;
    
    @Column(name = "are_pets_allowed")
    private Boolean petsAllowed;

    @Column(name = "ada_accessibility")
    private Boolean adaAccessibility;

    @Column(name = "income_requirements")
    private Integer incomeRequirements;

    @Column(name = "is_past_eviction_allowed")
    private Boolean pastEvictionAllowed;

    @Column(name = "is_offender_listing_allowed")
    private Boolean offenderListingAllowed;

    @Column(name = "is_criminal_record_allowed")
    private Boolean criminalRecordAllowed;

    @Column(name = "is_addiction_and_illness_allowed")
    private Boolean addictionAndIllnessAllowed;


}
