package com.company.service;

import com.company.dto.DebtDto;
import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;

import java.util.List;

public interface DebtService {
    DebtEntity findById(Long id);
    DebtEntity save(DebtDto entity);
    List<DebtEntity> findDebtsByCreditor(UserEntity creditor);
    List<DebtEntity> findDebtsByCreditorId(Long creditorId);
    List<DebtEntity> findDebtsByCreditorAndDebtor(UserEntity creditor, UserEntity debtor);
    List<DebtEntity> getDebtsWithDebtor( Long debtorId);

    List<DebtEntity> findDebtsBetweenUser(Long id, Long debtorId);

    void deleteById(Long id);

    void deleteAllDebtWithDebtor(String debtorUsername);
}
