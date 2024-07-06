package com.blog.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.Exception.ResourceNotFoundException;
import com.blog.entities.Category;

import com.blog.payloads.CategoryDto;
import com.blog.repositories.CategoryRepo;
import com.blog.service.CategoryService;
@Service
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	private CategoryRepo categoryRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public CategoryDto createCategory(CategoryDto categoryDto) {
		
		Category cat = this.modelMapper.map(categoryDto, Category.class);
		Category saveddata = this.categoryRepo.save(cat);
		return this.modelMapper.map(saveddata, CategoryDto.class);
	}

	@Override
	public CategoryDto getCategoryById(Integer id) {
		Category cat = this.categoryRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Category", "id" , id));
		return this.modelMapper.map(cat, CategoryDto.class);
	}

	@Override
	public List<CategoryDto> getAllCategory() {
		List<Category> categories = categoryRepo.findAll();
		List<CategoryDto> cat = categories.stream().map(category -> this.modelMapper.map(category, CategoryDto.class)).collect(Collectors.toList());
		return cat;

	}

}
