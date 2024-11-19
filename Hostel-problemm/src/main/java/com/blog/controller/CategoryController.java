package com.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.blog.payloads.CategoryDto;

import com.blog.service.CategoryService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/")
public class CategoryController {
      
	@Autowired
	private CategoryService categoryService;
	
	
	@PostMapping("category")
	public ResponseEntity<CategoryDto> createCategoryController(@RequestBody CategoryDto categorydto){
		CategoryDto createBlock = this.categoryService.createCategory(categorydto);
		return new ResponseEntity<CategoryDto>(createBlock , HttpStatus.CREATED);
	}
	
	@GetMapping("category/{cid}")
	public ResponseEntity<CategoryDto> getCategoryByIdController(@PathVariable("cid") Integer cid){
		CategoryDto categoryById = this.categoryService.getCategoryById(cid);
		return new ResponseEntity<CategoryDto>(categoryById , HttpStatus.OK);
	}
	
	@GetMapping("category/post")
	public ResponseEntity<List<CategoryDto>> getAllCategory(){
		List<CategoryDto> allCategory = this.categoryService.getAllCategory();
		return new ResponseEntity<List<CategoryDto>>(allCategory , HttpStatus.OK);
	}
	
}
