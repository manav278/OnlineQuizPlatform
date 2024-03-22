package com.example.restcontroller;
import com.example.entity.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    List<User>getAllUsers()
    {
        return userService.findAll();
    }

    @GetMapping("/user/{email}/{password}")
    User getUserById(@PathVariable String email,@PathVariable String password)
    {
        return userService.findById(email,password);
    }
    @PostMapping("/addUser")
    User addUser(@RequestBody User user)
    {
        return userService.addUser(user);
    }

}
