package com.company.web;

import com.company.dto.DebtDto;
import com.company.entity.DebtEntity;
import com.company.service.DebtService;
import com.company.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("debts")
public class DebtEndpoint {
    @Autowired
    private DebtService debtService;
    @Autowired
    private UserService userService;

    @GetMapping("{id}")
    public DebtEntity getDebtByid(@PathVariable Long id) {
        return debtService.findById(id);
    }

    @GetMapping("{creditorId}/{debtorId}")
    public void getDebtsWithDebtor(Long creditorId, Long debtorId) {
        debtService.findDebtsByCreditorIdAndDebtorId(creditorId, debtorId);
    }

    @PostMapping("/new")
    public DebtEntity save(@RequestBody DebtDto debtDto) {
        return debtService.save(debtDto);
    }

}
