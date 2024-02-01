package com.example.comixnookbackend.Pojo;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserPojo {

    private Long id;

    @NotNull
    private String fullName;

    @NotNull
    private String email;

    @NotNull
    private String password;

    private String securityQuestion;
}
