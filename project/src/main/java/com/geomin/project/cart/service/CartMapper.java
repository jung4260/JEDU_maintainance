package com.geomin.project.cart.service;

import org.apache.ibatis.annotations.Mapper;

import com.geomin.project.command.CartVO;

@Mapper
public interface CartMapper {
	
	//장바구니 추가
	public int addtoCart(CartVO vo);
	
	//장바구니 조회
	
	
}