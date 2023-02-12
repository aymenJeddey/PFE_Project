package com.bfi.engagement.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.Map;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Data
@Builder
@JsonInclude(NON_NULL)
public class Response {
    protected LocalDateTime timeStamp;
    protected HttpStatus status;
    protected String reason;
    protected Map<?, ?> data;
}
