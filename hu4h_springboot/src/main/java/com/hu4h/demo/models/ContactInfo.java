package com.hu4h.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


    @Entity
    public class ContactInfo {
        @Id
        @GeneratedValue
        private int id;

        private String name;

        private String email;

        public ContactInfo(String n, String e) {
            this.name = n;
            this.email = e;
        }

        public ContactInfo() {}
    }

