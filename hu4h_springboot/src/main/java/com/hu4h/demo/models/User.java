package com.hu4h.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Objects;


@Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    @Column(name = "username", nullable = false, unique = true)
    private String username;


    @NotBlank
    @Size(max = 50)
    @Column(name = "email")
    private String email;

    @Size(max = 120)
    @Column(name = "password")
    @JsonIgnore
    private String password;

    @Column(name = "role")
    private Role role;


    public User(String username, String email, String password, Role role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;

    }

    public User(RegisteringUser registeringUser) {
        this.username = registeringUser.getUsername();
        this.email = registeringUser.getEmail();
        this.password = registeringUser.getPassword();
        this.role = registeringUser.getRole();
    }

//    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//    public boolean isMatchingPassword(String password) {
//        return encoder.matches(password, passwordHashed);
//    }



    public @NotBlank @Size(max = 20) String getUsername() {
        return username;
    }

    public @NotBlank @Size(max = 50) String getEmail() {
        return email;
    }

    public @Size(max = 120) String getPassword() {
        return password;
    }

    public Long getId() {
        return id;
    }

    public Role getRole() {
        return role;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof User user)) return false;
        return Objects.equals(getId(), user.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    public User (){}
}
