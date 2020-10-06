package com.company.mapper;

import com.company.dto.DebtDto;
import com.company.dto.UserDto;
import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper
public interface SimpleSourceDestinationMapper {
    UserDto userEntityToUserDto(UserEntity entity);
    UserEntity userDtoToUserEntity(UserDto dto);
    void updateUserEntityFromDto(UserDto dto, @MappingTarget UserEntity entity);

    DebtDto debtEntityToDebtDto(DebtEntity entity);
    DebtEntity debtDtoToDebtEntity(DebtDto dto);
    void updateDebtEntityFromDto(DebtDto dto, @MappingTarget DebtEntity entity);
}
