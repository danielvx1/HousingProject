package com.hu4h.demo.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;


public class ConfirmDTO {
    @NotNull(message = "Username is required")
    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters")
    private String username;
    @NotBlank(message = "Password is required")
    @NotNull(message = "Password is required")
    @Size(min = 3, max = 20, message = "Password must be between 8 and 20 characters")
    String password;
    @NotNull(message = "Confirm username is required")
    @NotBlank(message = "Confirm username is required")
    @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters")
    private String confirmUsername;

    public @NotNull(message = "Username is required") @NotBlank(message = "Username is required") @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters") String getUsername() {
        return username;
    }

    public @NotBlank(message = "Password is required") @NotNull(message = "Password is required") @Size(min = 3, max = 20, message = "Password must be between 8 and 20 characters") String getPassword() {
        return password;
    }

    public @NotNull(message = "Confirm username is required") @NotBlank(message = "Confirm username is required") @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters") String getConfirmUsername() {
        return confirmUsername;
    }
}
