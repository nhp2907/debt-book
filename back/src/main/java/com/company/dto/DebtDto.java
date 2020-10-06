package com.company.dto;

import java.io.Serializable;

public class DebtDto implements Serializable {

    private Long id;
    private Long creditorId;
    private Long debtorId;
    private Double amount;
    private String description;

    public DebtDto(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCreditorId() {
        return creditorId;
    }

    public void setCreditorId(Long creditorId) {
        this.creditorId = creditorId;
    }

    public Long getDebtorId() {
        return debtorId;
    }

    public void setDebtorId(Long debtorId) {
        this.debtorId = debtorId;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


}
