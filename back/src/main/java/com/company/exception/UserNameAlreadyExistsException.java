package com.company.exception;

public class UserNameAlreadyExistsException extends RuntimeException {
    public UserNameAlreadyExistsException(String username) {
        super(String.format("Username %s is already taken!", username));
    }
}
