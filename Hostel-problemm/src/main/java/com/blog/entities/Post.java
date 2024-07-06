package com.blog.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter

public class Post {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Integer pid;
	private String username;
	private String regno;
	private String room;
	private String content;
	
	@ManyToOne
	private Category category;
	
	@ManyToOne
	private Block block;
	
}
