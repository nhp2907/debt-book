package com.company.repository.impl;

import com.company.entity.DebtEntity;
import com.company.entity.QDebtEntity;
import com.company.entity.UserEntity;
import com.company.repository.DebtRepositoryCustom;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class DebtRepositoryImpl implements DebtRepositoryCustom {
    @Autowired
    private EntityManager em;

    @Override
    public List<DebtEntity> findDebtsBetweenUsers(Long creditorId, Long debtorId) {
        BooleanExpression expression1 = QDebtEntity.debtEntity.creditor.id.eq(creditorId).and(QDebtEntity.debtEntity.debtor.id.eq(debtorId));
        BooleanExpression expression2 = QDebtEntity.debtEntity.creditor.id.eq(debtorId).and(QDebtEntity.debtEntity.debtor.id.eq(creditorId));

        return new JPAQuery<DebtEntity>(em).from(QDebtEntity.debtEntity)
                .where(expression1.or(expression2))
                .orderBy(QDebtEntity.debtEntity.insertDate.desc())
                .fetch();
    }
}
