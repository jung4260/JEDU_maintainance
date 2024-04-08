package com.geomin.project.command;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartVO {

	private Integer cart_id;
	private Integer user_no;
	private Integer game_no;
	private Integer game_price;
	
}
