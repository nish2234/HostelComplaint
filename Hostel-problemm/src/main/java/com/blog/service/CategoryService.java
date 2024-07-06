package com.blog.service;

import java.util.List;

import com.blog.payloads.CategoryDto;

public interface CategoryService {
        
	public CategoryDto createCategory(CategoryDto categoryDto);
	public CategoryDto getCategoryById(Integer id);
	public List<CategoryDto> getAllCategory();
	
}
