package com.bfi.securityservice.service;

import com.bfi.securityservice.model.AppUser;
import com.bfi.securityservice.model.Role;
import com.bfi.securityservice.repo.AppUserRepository;
import com.bfi.securityservice.repo.RoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service @RequiredArgsConstructor @Transactional @Slf4j
public class AppUserServiceImpl implements AppUserService, UserDetailsService {
    private  final AppUserRepository appUserRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = appUserRepository.findByUsername(username);
        if(user == null){
            log.error("User not found");
            throw new UsernameNotFoundException("User not found");
        } else {
            log.info("User found",username);

            }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority(role.getRoleName()));
        });
        return new org.springframework.security.core.userdetails.User(user.getUsername(),user.getPassword(), authorities);
    }

    @Override
    public AppUser saveUser(AppUser user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        //addRoleToUser(user.getUsername(), user.getRoles().iterator().next().getRoleName());
        return appUserRepository.save(user);
    }

    @Override
    public AppUser saveUserWithRole(AppUser user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        System.out.println(user);
        return appUserRepository.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public List<Role> getRoles() {
        return roleRepository.findAll() ;
    }

    @Override
    public void updateUser(AppUser appUser) {
        if (appUser != null && appUser.getId() != null){
            Optional<AppUser> userFromDB = appUserRepository.findById(appUser.getId());
                 if (userFromDB.isPresent()){
                appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
                appUserRepository.save(appUser);}
        }
    }

    @Override
    public void updateRole(Role role) {
        if (role != null && role.getId() != null){
            Optional<Role> userFromDB = roleRepository.findById(role.getId());
            if (userFromDB.isPresent()){
            roleRepository.save(role);}
        }
    }



    @Override
    public void addRoleToUser(String username, String roleName) {
    AppUser appUser = appUserRepository.findByUsername(username);
    Role role = roleRepository.findByRoleName(roleName);
        appUser.getRoles().add(role);
    }

    @Override
    public void deleteUser(Long id) {
        appUserRepository.deleteById(id);
    }

    @Override
    public void deleteRole(Long id) {
        roleRepository.deleteById(id);
    }

    @Override
    public AppUser getUser(String username) {
        return appUserRepository.findByUsername(username);
    }

    @Override
    public List<AppUser> getUsers() {
        return appUserRepository.findAll() ;
    }


}
