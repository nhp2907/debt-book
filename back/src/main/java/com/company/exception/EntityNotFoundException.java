package com.company.exception;

import com.company.entity.UserEntity;

public class EntityNotFoundException extends BusinessException {
    public EntityNotFoundException(Long id, Class clazz) {
        super(String.format("%s with id = %d not found", clazz.getName(), id));
    }
}
