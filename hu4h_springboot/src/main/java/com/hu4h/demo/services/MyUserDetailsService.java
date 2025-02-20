package com.hu4h.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hu4h.demo.data.UserRepository;
import com.hu4h.demo.models.User;
import com.hu4h.demo.models.UserPrincipal;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        // Return the user
        User user = userRepository.findByUsername(username);

        // Check if user exists
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        // found the user, which returns UserDetails

        return new UserPrincipal(user);
    }
}
