package com.bfi.securityservice.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.bfi.securityservice.model.AppUser;
import com.bfi.securityservice.model.Role;
import com.bfi.securityservice.service.AppUserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)

@RequestMapping("/api")
public class AppUserController {
    private final AppUserService appUserService;


    @GetMapping("/getUserByUsername")
    public ResponseEntity<AppUser> loadUserByUsername(@RequestParam String username  ){

        return ResponseEntity.ok().body(appUserService.getUser(username));
    }

    @GetMapping("/user")
    public ResponseEntity<List<AppUser>>getUsers(){
        return ResponseEntity.ok().body(appUserService.getUsers());
    }

    @PostMapping("/user")
    public ResponseEntity<AppUser>saveUser(@RequestBody AppUser user){
        return ResponseEntity.ok().body(appUserService.saveUser(user));
    }


    @PostMapping("/user-with-role")
    public ResponseEntity<AppUser>saveUserWithRole(@RequestBody AppUser user){
        return ResponseEntity.ok().body(appUserService.saveUserWithRole(user));
    }

    @GetMapping("/role")
    public ResponseEntity<List<Role>>getRoles(){
        return ResponseEntity.ok().body(appUserService.getRoles());
    }

    @PostMapping("/role")
    public ResponseEntity<Role>saveRole(@RequestBody Role role){
        return ResponseEntity.ok().body(appUserService.saveRole(role));
    }
    @PostMapping("/RoleToUser")
    public ResponseEntity<?>addRoleToUser(@RequestBody RoleToUserForm form) {
        appUserService.addRoleToUser(form.getUsername(), form.getRoleName());
        return ResponseEntity.ok().build();
    }
    @PutMapping("/user")
    public ResponseEntity<Void> update(@RequestBody AppUser appUser){
        appUserService.updateUser(appUser);
        return ResponseEntity.ok().build();}

    @PutMapping("/role")
    public ResponseEntity<Void> updateRole(@RequestBody Role role){
        appUserService.updateRole(role);
        return ResponseEntity.ok().build();}

    @DeleteMapping("/user/{id}")
    public  void deleteUser(@PathVariable Long id){ appUserService.deleteUser(id);}

    @DeleteMapping("/role/{id}")
    public  void deleteRole(@PathVariable Long id){ appUserService.deleteRole(id);}

    @GetMapping("/token/refresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")){
            try {
                String jwtRefreshToken = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(jwtRefreshToken);
                String username = decodedJWT.getSubject();
                AppUser user = appUserService.getUser(username);
                String jwtAccessToken = JWT.create()
                        .withSubject(user.getUsername())
                        .withExpiresAt(new Date(System.currentTimeMillis()+ 10 * 60 * 1000))
                        .withIssuer(request.getRequestURL().toString())
                        .withClaim("roles",user.getRoles().stream().map(Role::getRoleName).collect(Collectors.toList()))
                        .sign(algorithm);
                Map<String, String> tokens = new HashMap<>();
                tokens.put("access_token", jwtAccessToken);
                tokens.put("refresh_token", jwtRefreshToken);
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), tokens);
            }catch (Exception exception){
                response.setHeader("error",exception.getMessage());
                response.setStatus(FORBIDDEN.value());
                //response.sendError(FORBIDDEN.value());
                Map<String, String> error = new HashMap<>();
                error.put("error_message", exception.getMessage());
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }

        } else {
            throw new RuntimeException("Refresh token is missing");
        }
    }
}



@Data
class RoleToUserForm {
    private String username;
    private String roleName;
}
