package com.hu4h.demo.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.hu4h.demo.data.PropertyRepository;
import com.hu4h.demo.dtos.PropertyDTO;
import com.hu4h.demo.exceptions.NotFoundException;
import com.hu4h.demo.mappers.PropertyMapper;
import com.hu4h.demo.models.Property;
import com.hu4h.demo.services.PropertyService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PropertyServiceImpl implements PropertyService {

    private PropertyRepository propertyRepository;

    @Override
    public PropertyDTO createProperty(PropertyDTO propertyDTO) {
        
        Property property = PropertyMapper.mapToProperty(propertyDTO);
        Property savedProperty = propertyRepository.save(property);
        return PropertyMapper.mapToPropertyDTO(savedProperty);
    }

    @Override
    public PropertyDTO getPropertyById(Long propertyId) {
        
        Property property = propertyRepository.findById(propertyId)
            .orElseThrow(() -> new NotFoundException("Property with the given id does not exist: " + propertyId));

        return PropertyMapper.mapToPropertyDTO(property);
    }

    @Override
    public List<PropertyDTO> getAllProperties() {
        
        List<Property> properties = propertyRepository.findAll();
        return properties.stream().map((property) -> PropertyMapper.mapToPropertyDTO(property))
                .collect(Collectors.toList());
    }

    @Override
    public PropertyDTO updateProperty(Long propertyId, PropertyDTO updatedProperty) {
        
        Property property = propertyRepository.findById(propertyId).orElseThrow(
            () -> new NotFoundException("Property with the given id does not exist: " + propertyId)
        );

        property.setAddress(updatedProperty.getAddress());
        property.setLandlordEmail(updatedProperty.getLandlordEmail());
        property.setLandlordPhoneNumber(updatedProperty.getLandlordPhoneNumber());
        property.setNumberOfBedrooms(updatedProperty.getNumberOfBedrooms());
        property.setNumberOfBathrooms(updatedProperty.getNumberOfBathrooms());
        property.setTypeOfProperty(updatedProperty.getTypeOfProperty());
        property.setPetsAllowed(updatedProperty.getPetsAllowed());
        property.setAdaAccessibility(updatedProperty.getAdaAccessibility());
        property.setIncomeRequirements(updatedProperty.getIncomeRequirements());
        property.setPastEvictionAllowed(updatedProperty.getPastEvictionAllowed());
        property.setOffenderListingAllowed(updatedProperty.getOffenderListingAllowed());
        property.setCriminalRecordAllowed(updatedProperty.getCriminalRecordAllowed());
        property.setAddictionAndIllnessAllowed(updatedProperty.getAddictionAndIllnessAllowed());

        Property updatedPropertyObj = propertyRepository.save(property);

        return PropertyMapper.mapToPropertyDTO(updatedPropertyObj);
    }

    @Override
    public void deleteProperty(Long propertyId) {
        
        Property property = propertyRepository.findById(propertyId).orElseThrow(
            () -> new NotFoundException("Property with the given id does not exist: " + propertyId)
        );

        propertyRepository.deleteById(propertyId);
    }
    
}
