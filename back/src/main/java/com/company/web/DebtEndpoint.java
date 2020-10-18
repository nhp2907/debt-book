package com.company.web;

import com.company.dto.DebtDto;
import com.company.entity.DebtEntity;
import com.company.service.DebtService;
import com.company.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(value = "*", maxAge = 3600)
@RestController
@RequestMapping("api/debts")
public class DebtEndpoint {
    @Autowired
    private DebtService debtService;
    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public DebtEntity getDebtByid(@PathVariable Long id) {
        return debtService.findById(id);
    }

    @PostMapping("/new")
    public DebtEntity save(@RequestBody DebtDto debtDto) {
        return debtService.save(debtDto);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteDebt(@PathVariable Long id) {
        debtService.deleteById(id);
        return ResponseEntity.ok("Delete successfully!");
    }
    @GetMapping("/users/{debtorId}")
    public List<DebtEntity> getDebtsWithDebtor( @PathVariable Long debtorId) {
        return debtService.getDebtsWithDebtor(debtorId);
    }

    @DeleteMapping("/delete/users/{debtorUsername}")
    public ResponseEntity<String> deleteAllDebtWithUser(@PathVariable String  debtorUsername) {
        debtService.deleteAllDebtWithDebtor(debtorUsername);
        return ResponseEntity.ok("Delete successfully!");
    }

}
