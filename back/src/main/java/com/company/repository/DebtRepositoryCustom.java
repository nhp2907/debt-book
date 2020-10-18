package com.company.repository;

import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;

import java.util.List;

public interface DebtRepositoryCustom {
    List<DebtEntity> findDebtsBetweenUsers(Long creditorId, Long debtorId);
}
