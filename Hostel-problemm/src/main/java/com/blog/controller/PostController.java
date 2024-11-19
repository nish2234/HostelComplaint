package com.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.Exception.ApiResponse;
import com.blog.payloads.PostDto;
import com.blog.service.PostService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/")
public class PostController {
	
	@Autowired
	private PostService postService;
	
	@PostMapping("category/{cid}/block/{bid}/post")
	public ResponseEntity<PostDto> createPostController(@RequestBody PostDto postDto , 
			                                            @PathVariable("cid") Integer cid, 
			                                            @PathVariable("bid") Integer bid){
		PostDto createPost = this.postService.createPost(postDto, cid, bid);
		return new ResponseEntity<PostDto>(createPost , HttpStatus.CREATED);
	}
	@DeleteMapping("post/{pid}")
	public ResponseEntity<ApiResponse> deletePostController(@PathVariable("pid") Integer pid){
		this.postService.deletePost(pid);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Post Deleted Successfully" , true) , HttpStatus.OK);
	}
	
	@GetMapping("all")
	public ResponseEntity<List<PostDto>> getallpostController(){
		List<PostDto> allPost = this.postService.getAllPost();
		return new ResponseEntity<List<PostDto>>(allPost , HttpStatus.OK);
	}
	
	@GetMapping("category/{cid}/block/{bid}/get")
	public ResponseEntity<List<PostDto>> getallpostbycidController(@PathVariable("cid") Integer cid , @PathVariable("bid") Integer bid){
		List<PostDto> allPost = this.postService.getAllPostByCatBlock(cid , bid);
		return new ResponseEntity<List<PostDto>>(allPost , HttpStatus.OK);
	}
	
	
	

}
