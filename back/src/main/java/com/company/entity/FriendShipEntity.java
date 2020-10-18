package com.company.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "friend_ship")
public class FriendShipEntity {
    @Id
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user1")
    private UserEntity user1;
    @ManyToOne
    @JoinColumn(name = "user2")
    private UserEntity user2;
    private LocalDate date;

    public  FriendShipEntity(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserEntity getUser1() {
        return user1;
    }

    public void setUser1(UserEntity user1) {
        this.user1 = user1;
    }

    public UserEntity getUser2() {
        return user2;
    }

    public void setUser2(UserEntity user2) {
        this.user2 = user2;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
