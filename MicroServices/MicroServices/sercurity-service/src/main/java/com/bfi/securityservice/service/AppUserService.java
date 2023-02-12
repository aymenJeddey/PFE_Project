package com.bfi.securityservice.service;

import com.bfi.securityservice.model.AppUser;
import com.bfi.securityservice.model.Role;

import java.util.List;

public interface AppUserService {
    AppUser saveUser(AppUser user);
    Role saveRole(Role role);
    List<Role> getRoles();
    void updateUser(AppUser appUser);
    void updateRole(Role role);
    void addRoleToUser(String username, String roleName);
    void deleteUser(Long id);
    void deleteRole(Long id);
    AppUser getUser(String username);
    List<AppUser> getUsers();

    AppUser saveUserWithRole(AppUser user);
}
