package com.company.exception;

import com.company.entity.UserEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "No such entity")
public class EntityNotFoundException extends BusinessException {
    public EntityNotFoundException(Long id, Class clazz) {
        super(String.format("%s with id = %d not found", clazz.getName(), id));
    }
    public EntityNotFoundException(String username, Class clazz) {
        super(String.format("%s with username = %d not found", clazz.getName(), username));
    }
}
