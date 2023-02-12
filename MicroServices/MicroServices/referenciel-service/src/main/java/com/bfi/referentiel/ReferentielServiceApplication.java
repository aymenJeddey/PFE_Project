package com.bfi.referentiel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ReferentielServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReferentielServiceApplication.class, args);
    }

}
