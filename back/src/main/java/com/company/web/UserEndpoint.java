package com.company.web;

import com.company.dto.DebtDto;
import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;
import com.company.service.DebtService;
import com.company.service.UserService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.PreUpdate;
import java.util.List;

@CrossOrigin(value = "*", maxAge = 3600)
@RestController
@RequestMapping("api/users")
public class UserEndpoint {

    @Autowired
    private UserService userService;
    @Autowired
    private DebtService debtService;

    @GetMapping
    public List<UserEntity> findAllUsersByName(@RequestParam(required = false) String name) {
        if (StringUtils.isBlank(name)) {
            return userService.findAll();
        } else {
            return userService.findUserByName(name);
        }
    }

    @GetMapping("/{id}")
    public UserEntity findById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @GetMapping("/friends")
    public List<UserEntity> findFriendsByName() {
        return userService.findFriends();
    }

    @GetMapping("{id}/debts/{debtorId}")
    public List<DebtEntity> getDebtsWithDebtor(@PathVariable Long id, @PathVariable Long debtorId) {
        return debtService.findDebtsBetweenUser(id, debtorId);
    }

    @PostMapping("{id}/debts/new")
    public DebtEntity saveDebts(@RequestBody DebtDto debtDto) {
        return debtService.save(debtDto);
    }

    @DeleteMapping("{id}/debts/delete/{debtId}")
    public DebtEntity save(@RequestBody DebtDto debtDto) {
        return debtService.save(debtDto);
    }
}
