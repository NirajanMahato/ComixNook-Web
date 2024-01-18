package com.example.comixnookbackend.Pojo;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserPojo {
    private Long id;

    @NonNull
    private String fullName;

    @NonNull
    private String email;

    @NonNull
    private String password;

    private String securityQuestion;
}
