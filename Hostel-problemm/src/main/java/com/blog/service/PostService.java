package com.blog.service;

import java.util.List;

import com.blog.payloads.PostDto;


public interface PostService {
       
	PostDto createPost(PostDto postDto , Integer cid , Integer bid);
	void deletePost(Integer pid);
	List<PostDto> getAllPost();
	List<PostDto> getAllPostByCatBlock(Integer cid , Integer bid);
}
