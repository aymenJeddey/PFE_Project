package com.bfi.securityservice;

import com.bfi.securityservice.model.AppUser;
import com.bfi.securityservice.model.Role;
import com.bfi.securityservice.service.AppUserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.metrics.buffering.BufferingApplicationStartup;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.Date;

@SpringBootApplication
public class SecurityServiceApplication {

    public static void main(String[] args) {
      //  SpringApplication.run(SecurityServiceApplication.class, args);
        SpringApplication app = new SpringApplication(SecurityServiceApplication.class);
        app.setApplicationStartup(new BufferingApplicationStartup(2048));
        app.run(args);
    }
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    CommandLineRunner run(AppUserService appUserService) {

        return args -> {
            appUserService.saveRole(new Role(null, "ADMIN",new Date()));
            appUserService.saveRole(new Role(null, "CHEF_AGENCE",new Date()));
            appUserService.saveRole(new Role(null, "CHARGE",new Date()));

            appUserService.saveUser(new AppUser(null, "user1", "1234", false, new Date(), new ArrayList<>()));
            appUserService.saveUser(new AppUser(null, "user2", "1234", false, new Date(), new ArrayList<>()));
            appUserService.saveUser(new AppUser(null, "user3", "1234", false, new Date(), new ArrayList<>()));
            appUserService.saveUser(new AppUser(null, "Admin", "1234", false, new Date(), new ArrayList<>()));

            appUserService.addRoleToUser("user1", "CHEF_AGENCE");
            appUserService.addRoleToUser("user2", "CHARGE");
            appUserService.addRoleToUser("user3", "CHEF_AGENCE");
            appUserService.addRoleToUser("Admin", "ADMIN");


        };
    }
}
