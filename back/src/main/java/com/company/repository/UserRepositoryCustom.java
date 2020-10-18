package com.company.repository;

import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;

import java.util.List;

public interface UserRepositoryCustom {
    List<DebtEntity> findAllDebts(Long creditorId);

    List<UserEntity> findFriend(UserEntity currentUser);

    List<UserEntity> findFriendByName(UserEntity currentUser, String name);
}
