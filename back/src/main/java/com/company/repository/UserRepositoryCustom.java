package com.company.repository;

import com.company.entity.DebtEntity;

import java.util.List;

public interface UserRepositoryCustom {
    List<DebtEntity> findAllDebts(Long creditorId);
}
