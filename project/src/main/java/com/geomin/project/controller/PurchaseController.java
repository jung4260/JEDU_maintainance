package com.geomin.project.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.geomin.project.command.CartVO;
import com.geomin.project.command.MyData;

@RestController
public class PurchaseController {
	
	@PostMapping("/submitData")
    public String submitData(@RequestBody MyData myData) {
        // 클라이언트로부터 전송된 데이터 확인
        System.out.println("Received data: " + myData.getSelectedValues());
        
        // 데이터를 처리하거나 다른 작업 수행
        
        // 클라이언트에 응답 전송
        return "Data received successfully";
    }
	
	@GetMapping("/add/cart")
	public String cart(@RequestParam("userNo") int userNo, @RequestParam("price") int price) {
		
		
		System.out.println(userNo);
		System.out.println(price);
		
		return "데이터 도착";
	}
	
	
	
}
