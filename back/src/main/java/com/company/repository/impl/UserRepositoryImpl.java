package com.company.repository.impl;

import com.company.entity.*;
import com.company.repository.UserRepositoryCustom;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepositoryCustom {

    @PersistenceContext
    private EntityManager em;


    @Override
    public List<DebtEntity> findAllDebts(Long creditorId) {
        return new JPAQuery<DebtEntity>(em).from(QDebtEntity.debtEntity)
                .where(QDebtEntity.debtEntity.creditor.id.eq(creditorId))
                .fetch();
    }

    @Override
    public List<UserEntity> findFriend(UserEntity userEntity) {
        QFriendShipEntity qFriendShipEntity = QFriendShipEntity.friendShipEntity;
        return new JPAQuery<UserEntity>(em)
                .select(QUserEntity.userEntity)
                .from(QUserEntity.userEntity)
                .join(qFriendShipEntity)
                .on(QUserEntity.userEntity.eq(qFriendShipEntity.user1).or(QUserEntity.userEntity.eq(qFriendShipEntity.user2)))
                .fetchJoin()
                .where(qFriendShipEntity.user1.eq(userEntity).or(qFriendShipEntity.user1.eq(userEntity))
                        .and(QUserEntity.userEntity.ne(userEntity)))
                .fetch();
    }

    @Override
    public List<UserEntity> findFriendByName(UserEntity currentUser, String name) {
        QFriendShipEntity qFriendShipEntity = QFriendShipEntity.friendShipEntity;
        BooleanExpression user1ContainsName = qFriendShipEntity.user1.ne(currentUser).and(qFriendShipEntity.user1.name.containsIgnoreCase(name));
        BooleanExpression user2ContainsName = qFriendShipEntity.user2.ne(currentUser).and(qFriendShipEntity.user2.name.containsIgnoreCase(name));
        BooleanExpression containsName = user1ContainsName.or(user2ContainsName);
        BooleanExpression containsCurrentUser = qFriendShipEntity.user1.eq(currentUser).or(qFriendShipEntity.user1.eq(currentUser));
        return new JPAQuery<UserEntity>(em)
                .select(QUserEntity.userEntity)
                .from(QUserEntity.userEntity)
                .join(qFriendShipEntity)
                .on(QUserEntity.userEntity.eq(qFriendShipEntity.user1).or(QUserEntity.userEntity.eq(qFriendShipEntity.user2)))
                .fetchJoin()
                .where(containsCurrentUser.and(containsName).and(QUserEntity.userEntity.ne(currentUser)))
                .fetch();
    }

}
