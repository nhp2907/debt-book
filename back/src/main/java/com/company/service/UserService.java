package com.company.service;

import com.company.dto.SignUpRequestDto;
import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;
import com.company.exception.UserAlreadyExistsException;

import java.util.List;

public interface UserService {

    List<UserEntity> findAll();

    UserEntity findById(Long id);

    List<DebtEntity> findAllDebts(Long creditorId);

    UserEntity findByUsername(String username);

    boolean existsByUsername(String username);

    UserEntity signup(SignUpRequestDto requestDto) throws UserAlreadyExistsException;

    List<UserEntity> findFriends();

    List<UserEntity> findFriendsByName(String name);

    List<UserEntity> findUserByName(String name);
}
