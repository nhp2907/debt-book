package com.company.repository;

import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DebtRepository extends JpaRepository<DebtEntity, Long>, QuerydslPredicateExecutor<DebtEntity>, DebtRepositoryCustom {
    List<DebtEntity> findAll();
    List<DebtEntity> findDebtsByCreditor(UserEntity creditor);
    List<DebtEntity> findDebtsByCreditorOrDebtor(UserEntity creditor, UserEntity debtor);
    List<DebtEntity> findDebtsByCreditorOrDebtorOrderByInsertDateDesc(UserEntity creditor, UserEntity debtor);
    void deleteByCreditorAndDebtor(UserEntity creditor, UserEntity debtor);

}
