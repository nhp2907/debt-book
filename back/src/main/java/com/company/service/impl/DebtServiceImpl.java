package com.company.service.impl;

import com.company.dto.DebtDto;
import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;
import com.company.exception.EntityNotFoundException;
import com.company.mapper.SimpleSourceDestinationMapper;
import com.company.repository.DebtRepository;
import com.company.security.AuthUtils;
import com.company.service.DebtService;
import com.company.service.UserService;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
public class DebtServiceImpl implements DebtService {

    @Autowired
    private DebtRepository debtRepository;
    @Autowired
    private UserService userService;

    private final SimpleSourceDestinationMapper mapper = Mappers.getMapper(SimpleSourceDestinationMapper.class);


    @Override
    public DebtEntity findById(Long id) {
        return debtRepository.findById(id).orElseGet(() -> {
            throw new EntityNotFoundException(id, DebtEntity.class);
        });
    }

    @Override
    public DebtEntity save(DebtDto dto) {
        DebtEntity entity = null;
        if (dto.getId() == null) {
            entity = createNewDebtEntity(dto);
        } else {
            entity = debtRepository.getOne(dto.getId());
            updateDebtEntityFromDto(dto, entity);
        }
        return debtRepository.save(entity);
        // TODO test transactional auto save
    }

    @Override
    public List<DebtEntity> findDebtsByCreditor(UserEntity creditor) {
        return debtRepository.findDebtsByCreditor(creditor);
    }

    @Override
    public List<DebtEntity> findDebtsByCreditorId(Long creditorId) {
        return findDebtsByCreditor(userService.findById(creditorId));
    }

    @Override
    public List<DebtEntity> findDebtsByCreditorAndDebtor(UserEntity creditor, UserEntity debtor) {
        return debtRepository.findDebtsByCreditorOrDebtor(creditor, debtor);
    }

    @Override
    public List<DebtEntity> getDebtsWithDebtor(Long debtorId) {
        return debtRepository.findDebtsBetweenUsers(AuthUtils.getCurrentUser().getId(), debtorId);
    }

    @Override
    public List<DebtEntity> findDebtsBetweenUser(Long id1, Long id2) {
        return debtRepository.findDebtsBetweenUsers(id1, id2);
    }

    @Override
    public void deleteById(Long id) {
        DebtEntity debtEntity = findById(id);
        debtRepository.delete(debtEntity);
    }

    @Override
    public void deleteAllDebtWithDebtor(String debtorUsername) {
        UserEntity debtor = userService.findByUsername(debtorUsername);
        List<DebtEntity> debts = findDebtsBetweenUser(AuthUtils.getCurrentUser().getId(), debtor.getId());
        debts.forEach(debtEntity -> {
            debtRepository.delete(debtEntity);
        });
    }


    private DebtEntity createNewDebtEntity(DebtDto dto) {
        var entity = mapper.debtDtoToDebtEntity(dto);
        updateCreditorAndDebtor(dto, entity);
        entity.setInsertUser(userService.findById(dto.getCreditorId()).getUsername());
        entity.setInsertDate(LocalDateTime.now());
        return entity;
    }

    private void updateDebtEntityFromDto(DebtDto dto, DebtEntity entity) {
        mapper.updateDebtEntityFromDto(dto, entity);
        updateCreditorAndDebtor(dto, entity);
    }

    private void updateCreditorAndDebtor(DebtDto dto, DebtEntity entity) {
        entity.setCreditor(userService.findById(dto.getCreditorId()));
        entity.setDebtor(userService.findById(dto.getDebtorId()));
    }
}

