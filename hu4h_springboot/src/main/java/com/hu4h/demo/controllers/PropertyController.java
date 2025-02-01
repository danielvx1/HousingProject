package com.hu4h.demo.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hu4h.demo.dtos.PropertyDTO;
import com.hu4h.demo.services.PropertyService;

import lombok.AllArgsConstructor;

@CrossOrigin(origins = "http://localhost:5173")
@AllArgsConstructor
@RestController
@RequestMapping("/api/properties")
public class PropertyController {
    
    private PropertyService propertyService;

    // Add property REST API
    @PostMapping
    public ResponseEntity<PropertyDTO> createProperty(@RequestBody PropertyDTO propertyDTO) {
        PropertyDTO savedProperty = propertyService.createProperty(propertyDTO);
        return new ResponseEntity<>(savedProperty, HttpStatus.CREATED);
    }

    // Get property REST API
    @GetMapping("{id}")
    public ResponseEntity<PropertyDTO> getPropertyById(@PathVariable("id") Long propertyId) {
        PropertyDTO propertyDTO = propertyService.getPropertyById(propertyId);
        return ResponseEntity.ok(propertyDTO);
    }

    // Get all properties REST API
    @GetMapping
    public ResponseEntity<List<PropertyDTO>> getAllProperties() {
        List<PropertyDTO> properties = propertyService.getAllProperties();
        return ResponseEntity.ok(properties);
    }

    // Update property REST API
    @PutMapping("{id}")
    public ResponseEntity<PropertyDTO> updateProperty(@PathVariable("id") Long propertyId, @RequestBody PropertyDTO updatedProperty) {
        PropertyDTO propertyDTO = propertyService.updateProperty(propertyId, updatedProperty);
        return ResponseEntity.ok(propertyDTO);
    }

    // Delete property REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProperty(@PathVariable("id") Long propertyId) {
        propertyService.deleteProperty(propertyId);
        return ResponseEntity.ok("Property deleted successfully.");
    }
}
