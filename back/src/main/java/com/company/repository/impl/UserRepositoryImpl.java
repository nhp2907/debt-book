package com.company.repository.impl;

import com.company.entity.DebtEntity;
import com.company.entity.QDebtEntity;
import com.company.repository.UserRepositoryCustom;
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
}
