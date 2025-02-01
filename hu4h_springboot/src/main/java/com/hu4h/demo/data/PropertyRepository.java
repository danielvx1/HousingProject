package com.hu4h.demo.data;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hu4h.demo.models.Property;

public interface PropertyRepository extends JpaRepository<Property, Long>{
    
}
