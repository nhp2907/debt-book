package com.company.exception;

public class UserAlreadyExistsException extends Throwable {
    public UserAlreadyExistsException(String username) {
        super(String.format("Username %s is already taken!", username));
    }
}
