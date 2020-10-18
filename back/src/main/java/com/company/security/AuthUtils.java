package com.company.security;

import com.company.entity.UserEntity;
import com.company.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class AuthUtils {
    private static UserService userService;

    @Autowired
    public AuthUtils(UserService userService) {
        AuthUtils.userService = userService;
    }

    public static UserEntity getCurrentUser() {
//        return userService.findByUsername((String) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        return userService.findByUsername("admin");
    }
}
