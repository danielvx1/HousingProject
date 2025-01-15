package com.hu4h.demo.dtos;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class RegistrationDTO {
    @NotNull(message = "Username is required")
    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters")
    private String username;

    @NotNull(message = "email is required")
    @NotBlank(message = "email is required")
    @Size(min = 3, max = 50, message = "Username must be between 3 and 20 characters")
    private String email;


    @NotBlank(message = "Password is required")
    @NotNull(message = "Password is required")
    @Size(min = 3, max = 20, message = "Password must be between 8 and 20 characters")
    String password;

    @NotBlank(message = "Role is required")
    @NotNull(message = "Role is required")
    String role;

    RegistrationDTO(String username, String email, String password, String role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public @NotNull(message = "Username is required") @NotBlank(message = "Username is required") @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters") String getUsername() {
        return username;
    }

    public @NotNull(message = "email is required") @NotBlank(message = "email is required") @Size(min = 3, max = 50, message = "Username must be between 3 and 20 characters") String getEmail() {
        return email;
    }

    public @NotBlank(message = "Password is required") @NotNull(message = "Password is required") @Size(min = 3, max = 20, message = "Password must be between 8 and 20 characters") String getPassword() {
        return password;
    }

    public @NotBlank(message = "Role is required") @NotNull(message = "Role is required") String getRole() {
        return role;
    }
}
