package com.hu4h.demo.services;

import java.util.Date;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.hu4h.demo.models.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.security.NoSuchAlgorithmException;

@Service
public class JwtService {

    private String secretKey = "";

    public JwtService() {
        try {
            KeyGenerator keyGen = KeyGenerator.getInstance("HmacSHA256");
            SecretKey sk = keyGen.generateKey();
            secretKey = Base64.getEncoder().encodeToString(sk.getEncoded());
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
        
    }

    public String generateToken(String username) {
        // Create claims manually
        Map<String, Object> claims = new HashMap<>();
        claims.put("sub", username); // 'sub' claim is for subject

        return Jwts.builder()
                .setClaims(claims) // Set claims explicitly
                .setSubject(username) // Set subject
                .setIssuedAt(new Date(System.currentTimeMillis())) // Set issued at
                .setExpiration(new Date(System.currentTimeMillis() + (60 * 60 * 30 * 1000L))) // Set expiration (30 hours)
                .signWith(getKey(), SignatureAlgorithm.HS256) // Signs the JWT using HS256 and the secret key
                .compact(); // Generate JWT
    }

    private Key getKey() {
        // Convert string to bytes using Decoders.BASE64
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        // (Convert string into a key)
        // Pass bytes (with Keys method, hmacSha for specifying algorithm utilized )
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String extractUsername(String token) {
        // extract the username from jwt token
        return extractClaim(token, Claims::getSubject);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimResolver) {
        final Claims claims = extractAllClaims(token);
        return claimResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        final String userName = extractUsername(token);
        return (userName.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

}
