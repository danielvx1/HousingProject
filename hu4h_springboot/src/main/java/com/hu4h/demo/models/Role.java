package com.hu4h.demo.models;

import lombok.Getter;

@Getter
public enum Role {
    ADMIN("Admin"),
    SOCIAL("Social worker"),
    VOLUNTEER("Volunteer");

    private final String displayName;
    Role(String displayName) {
        this.displayName = displayName;
    }

    }
