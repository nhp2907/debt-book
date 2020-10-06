package com.company.web;

import com.company.dto.DebtDto;
import com.company.entity.DebtEntity;
import com.company.entity.UserEntity;
import com.company.service.DebtService;
import com.company.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("users")
public class UserEndpoint {

    @Autowired
    private UserService userService;
    @Autowired
    private DebtService debtService;

    @GetMapping("")
    public List<UserEntity> findAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public UserEntity findById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @GetMapping("{id}/debts/{debtorId}")
    public List<DebtEntity> getDebtsWithDebtor(@PathVariable Long id, @PathVariable Long debtorId) {
        return debtService.findDebtsByCreditorIdAndDebtorId(id, debtorId);
    }

    @PostMapping("{id}/debts/new")
    public DebtEntity save(@RequestBody DebtDto debtDto) {
        return debtService.save(debtDto);
    }
}
