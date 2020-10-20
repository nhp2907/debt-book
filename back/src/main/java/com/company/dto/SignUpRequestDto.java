package com.company.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class SignUpRequestDto {
    @NotBlank(message = "name is required")
    private String name;
    @NotBlank(message = "username is required")
    @Size(min = 5, max = 30, message = "username length must be between 6 and 30")
    private String username;
    @NotBlank(message = "password is required")
    @Size(min = 5, max = 30)
    private String password;

    public SignUpRequestDto(){}

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
