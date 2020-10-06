package com.company.repository;

import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> , QuerydslPredicateExecutor<UserEntity>, UserRepositoryCustom {

}
