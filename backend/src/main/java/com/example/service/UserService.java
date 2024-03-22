package com.example.service;

import com.example.entity.User;

import java.util.List;

public interface UserService {
    List<User>findAll();
    User findById(String email,String password);
    User addUser(User user);
}
