package com.hu4h.demo.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PropertyDTO {
    private Long id;
    private String address;
    private String landlordEmail;
    private String landlordPhoneNumber;
    private Integer numberOfBedrooms;
    private Integer numberOfBathrooms;
    private String typeOfProperty;
    private Boolean petsAllowed;    
    private Boolean adaAccessibility;
    private Integer incomeRequirements;
    private Boolean pastEvictionAllowed;
    private Boolean offenderListingAllowed;
    private Boolean criminalRecordAllowed;
    private Boolean addictionAndIllnessAllowed;
}
