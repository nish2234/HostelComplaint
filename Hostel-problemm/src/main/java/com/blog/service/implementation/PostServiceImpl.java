package com.blog.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.Exception.ResourceNotFoundException;
import com.blog.entities.Block;
import com.blog.entities.Category;
import com.blog.entities.Post;
import com.blog.payloads.PostDto;
import com.blog.repositories.BlockRepo;
import com.blog.repositories.CategoryRepo;
import com.blog.repositories.PostRepo;
import com.blog.service.PostService;
@Service
public class PostServiceImpl implements PostService {
    @Autowired
	private BlockRepo blockRepo;
	
    @Autowired
	private CategoryRepo categoryRepo;
	
    @Autowired
	private PostRepo postRepo;
    
    @Autowired
    private ModelMapper modelMapper;
	
	@Override
	public PostDto createPost(PostDto postDto, Integer cid, Integer bid) {
                 
		Category category = this.categoryRepo.findById(cid).orElseThrow(()-> new ResourceNotFoundException("Category", "id", cid));
	    Block block = this.blockRepo.findById(bid).orElseThrow(()-> new ResourceNotFoundException("Block","id", bid));
	    Post post = this.modelMapper.map(postDto, Post.class);
	    post.setCategory(category);
	    post.setBlock(block);
	    Post save = this.postRepo.save(post);
	    return this.modelMapper.map(save, PostDto.class);
	}

	@Override
	public void deletePost(Integer pid) {
		// TODO Auto-generated method stub
		Post post = this.postRepo.findById(pid).orElseThrow(() -> new ResourceNotFoundException("Post", "id", pid));
		this.postRepo.delete(post);
	}

	@Override
	public List<PostDto> getAllPost() {
	       List<Post> posts = this.postRepo.findAll();
	       List<PostDto> postDtos  = posts.stream().map(post -> this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
	       return postDtos;
	}

	@Override
	public List<PostDto> getAllPostByCatBlock(Integer cid, Integer bid) {
		 List<Post> posts = this.postRepo.getPost(cid, bid);
		 List<PostDto> postDtos  = posts.stream().map(post -> this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
		 return postDtos;
		
	}

}
