package com.example.comixnookbackend.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="users")
@Data
public class User {

    @Id
    @SequenceGenerator(name = "users_seq_gen", sequenceName = "users_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "users_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name="full_name", nullable = false)
    private String fullName;

    @Column(name="email", nullable = false, unique = true)
    private String email;

    @Column(name="password", nullable = false)
    private String password;

    @Column(name="security_question")
    private String securityQuestion;

}