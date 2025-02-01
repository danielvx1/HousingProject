package com.hu4h.demo.mappers;

import com.hu4h.demo.dtos.PropertyDTO;
import com.hu4h.demo.models.Property;

public class PropertyMapper {
    
    public static PropertyDTO mapToPropertyDTO(Property property) {
        return new PropertyDTO(
            property.getId(),
            property.getAddress(),
            property.getLandlordEmail(),
            property.getLandlordPhoneNumber(),
            property.getNumberOfBedrooms(),
            property.getNumberOfBathrooms(),
            property.getTypeOfProperty(),
            property.getPetsAllowed(),
            property.getAdaAccessibility(),
            property.getIncomeRequirements(),
            property.getPastEvictionAllowed(),
            property.getOffenderListingAllowed(),
            property.getCriminalRecordAllowed(),
            property.getAddictionAndIllnessAllowed()
        );
    }

    public static Property mapToProperty(PropertyDTO propertyDTO) {
        return new Property(
            propertyDTO.getId(),
            propertyDTO.getAddress(),
            propertyDTO.getLandlordEmail(),
            propertyDTO.getLandlordPhoneNumber(),
            propertyDTO.getNumberOfBedrooms(),
            propertyDTO.getNumberOfBathrooms(),
            propertyDTO.getTypeOfProperty(),
            propertyDTO.getPetsAllowed(),
            propertyDTO.getAdaAccessibility(),
            propertyDTO.getIncomeRequirements(),
            propertyDTO.getPastEvictionAllowed(),
            propertyDTO.getOffenderListingAllowed(),
            propertyDTO.getCriminalRecordAllowed(),
            propertyDTO.getAddictionAndIllnessAllowed()
        );
    }
}
