package com.company.mapper;

import com.company.dto.DebtDto;
import com.company.dto.UserDto;
import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2020-10-04T21:52:22+0700",
    comments = "version: 1.3.1.Final, compiler: javac, environment: Java 14.0.1 (Oracle Corporation)"
)
public class SimpleSourceDestinationMapperImpl implements SimpleSourceDestinationMapper {

    @Override
    public UserDto userEntityToUserDto(UserEntity entity) {
        if ( entity == null ) {
            return null;
        }

        UserDto userDto = new UserDto();

        userDto.setId( entity.getId() );
        userDto.setName( entity.getName() );
        userDto.setUserName( entity.getUserName() );
        userDto.setPassword( entity.getPassword() );

        return userDto;
    }

    @Override
    public UserEntity userDtoToUserEntity(UserDto dto) {
        if ( dto == null ) {
            return null;
        }

        UserEntity userEntity = new UserEntity();

        userEntity.setId( dto.getId() );
        userEntity.setName( dto.getName() );
        userEntity.setUserName( dto.getUserName() );
        userEntity.setPassword( dto.getPassword() );

        return userEntity;
    }

    @Override
    public void updateUserEntityFromDto(UserDto dto, UserEntity entity) {
        if ( dto == null ) {
            return;
        }

        entity.setId( dto.getId() );
        entity.setName( dto.getName() );
        entity.setUserName( dto.getUserName() );
        entity.setPassword( dto.getPassword() );
    }

    @Override
    public DebtDto debtEntityToDebtDto(DebtEntity entity) {
        if ( entity == null ) {
            return null;
        }

        DebtDto debtDto = new DebtDto();

        debtDto.setId( entity.getId() );
        debtDto.setAmount( entity.getAmount() );
        debtDto.setDescription( entity.getDescription() );

        return debtDto;
    }

    @Override
    public DebtEntity debtDtoToDebtEntity(DebtDto dto) {
        if ( dto == null ) {
            return null;
        }

        DebtEntity debtEntity = new DebtEntity();

        debtEntity.setId( dto.getId() );
        debtEntity.setAmount( dto.getAmount() );
        debtEntity.setDescription( dto.getDescription() );

        return debtEntity;
    }

    @Override
    public void updateDebtEntityFromDto(DebtDto dto, DebtEntity entity) {
        if ( dto == null ) {
            return;
        }

        entity.setId( dto.getId() );
        entity.setAmount( dto.getAmount() );
        entity.setDescription( dto.getDescription() );
    }
}
