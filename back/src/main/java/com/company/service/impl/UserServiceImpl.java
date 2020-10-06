package com.company.service.impl;

import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;
import com.company.exception.EntityNotFoundException;
import com.company.repository.UserRepository;
import com.company.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<UserEntity> findAll() {
        return userRepository.findAll();
    }

    @Override
    public UserEntity findById(Long id) {
        return userRepository.findById(id).orElseGet(() -> {
            throw new EntityNotFoundException(id, UserEntity.class);
        });
    }

    @Override
    public List<DebtEntity> findAllDebts(Long creditorId) {
        return userRepository.findAllDebts(creditorId);
    }
}
