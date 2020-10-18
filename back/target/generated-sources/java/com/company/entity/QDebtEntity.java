package com.company.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDebtEntity is a Querydsl query type for DebtEntity
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QDebtEntity extends EntityPathBase<DebtEntity> {

    private static final long serialVersionUID = -119543805L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QDebtEntity debtEntity = new QDebtEntity("debtEntity");

    public final NumberPath<Double> amount = createNumber("amount", Double.class);

    public final QUserEntity creditor;

    public final QUserEntity debtor;

    public final StringPath description = createString("description");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final DateTimePath<java.time.LocalDateTime> insertDate = createDateTime("insertDate", java.time.LocalDateTime.class);

    public final StringPath insertUser = createString("insertUser");

    public QDebtEntity(String variable) {
        this(DebtEntity.class, forVariable(variable), INITS);
    }

    public QDebtEntity(Path<? extends DebtEntity> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QDebtEntity(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QDebtEntity(PathMetadata metadata, PathInits inits) {
        this(DebtEntity.class, metadata, inits);
    }

    public QDebtEntity(Class<? extends DebtEntity> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.creditor = inits.isInitialized("creditor") ? new QUserEntity(forProperty("creditor")) : null;
        this.debtor = inits.isInitialized("debtor") ? new QUserEntity(forProperty("debtor")) : null;
    }

}

