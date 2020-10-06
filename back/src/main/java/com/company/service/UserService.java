package com.company.service;

import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;

import java.util.List;

public interface UserService {

    List<UserEntity> findAll();

    UserEntity findById(Long id);

    List<DebtEntity> findAllDebts(Long creditorId);
}
