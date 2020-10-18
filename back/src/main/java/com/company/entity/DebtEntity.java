package com.company.entity;
import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "debt")
public class DebtEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double amount;

    @ManyToOne
    @JoinColumn(name = "creditor_id")
    private UserEntity creditor;

    @ManyToOne
    @JoinColumn(name = "debtor_id")
    private UserEntity debtor;

    @Column(name = "user_i")
    private String insertUser;

    @Column(name = "date_i")
    private LocalDateTime insertDate;

    private String description;

    public DebtEntity(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public UserEntity getCreditor() {
        return creditor;
    }

    public void setCreditor(UserEntity creditor) {
        this.creditor = creditor;
    }

    public UserEntity getDebtor() {
        return debtor;
    }

    public void setDebtor(UserEntity debtor) {
        this.debtor = debtor;
    }

    public String getInsertUser() {
        return insertUser;
    }

    public void setInsertUser(String insertUser) {
        this.insertUser = insertUser;
    }

    public LocalDateTime getInsertDate() {

        return insertDate;
    }

    public void setInsertDate(LocalDateTime insertDate) {
        this.insertDate = insertDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
