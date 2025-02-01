package com.hu4h.demo.services;

import java.util.List;

import com.hu4h.demo.dtos.PropertyDTO;

public interface PropertyService {
    PropertyDTO createProperty(PropertyDTO propertyDTO);

    PropertyDTO getPropertyById(Long propertyId);

    List<PropertyDTO> getAllProperties();

    PropertyDTO updateProperty(Long propertyId, PropertyDTO updatedProperty);

    void deleteProperty(Long propertyId);
}
