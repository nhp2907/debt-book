package com.company.service.impl;

import com.company.dto.SignUpRequestDto;
import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;
import com.company.exception.EntityNotFoundException;
import com.company.exception.UserNameAlreadyExistsException;
import com.company.mapper.SimpleSourceDestinationMapper;
import com.company.repository.UserRepository;
import com.company.security.AuthUtils;
import com.company.service.UserService;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    private final SimpleSourceDestinationMapper mapper = Mappers.getMapper(SimpleSourceDestinationMapper.class);

    @Autowired
    private PasswordEncoder encoder;

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

    @Override
    public UserEntity findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public UserEntity signup(SignUpRequestDto requestDto)  {
        if (userRepository.existsByUsername(requestDto.getUsername())) {
            throw new UserNameAlreadyExistsException(requestDto.getUsername());
        }

        UserEntity userEntity = createUserFromSignupRequestDto(requestDto);
        return userRepository.save(userEntity);
    }

    @Override
    public List<UserEntity> findFriends() {
        return userRepository.findFriend(AuthUtils.getCurrentUser());
    }

    @Override
    public List<UserEntity> findFriendsByName(String name) {
        return userRepository.findFriendByName(AuthUtils.getCurrentUser(), name);
    }

    @Override
    public List<UserEntity> findUserByName(String name) {
        return userRepository.findByNameContainingIgnoreCase(name.toLowerCase());
    }

    private UserEntity createUserFromSignupRequestDto(SignUpRequestDto requestDto) {
        UserEntity userEntity = mapper.signupRequestDtoToUserEntity(requestDto);
        userEntity.setPassword(encoder.encode(requestDto.getPassword()));
        return userEntity;
    }
}
