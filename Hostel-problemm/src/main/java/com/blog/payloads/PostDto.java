package com.blog.payloads;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class PostDto {
	private Integer pid;
	private String username;
	private String regno;
	private String room;
	private String content;
	private CategoryDto category;
	private BlockDto block;
}
