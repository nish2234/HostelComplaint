package com.blog.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.Exception.ResourceNotFoundException;
import com.blog.entities.Block;
import com.blog.payloads.BlockDto;

import com.blog.repositories.BlockRepo;
import com.blog.service.BlockService;

@Service

public class BlockServiceImpl implements BlockService {
	
	@Autowired
	private BlockRepo blockRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public BlockDto createBlock(BlockDto blockDto) {
		
		Block block = this.modelMapper.map(blockDto, Block.class);
		Block saved = this.blockRepo.save(block);
		return this.modelMapper.map(saved, BlockDto.class);
           
	}

	@Override
	public BlockDto getBlockById(Integer bid) {
		Block blockbyid = this.blockRepo.findById(bid).orElseThrow(()-> new ResourceNotFoundException("Block", "id", bid));
		return this.modelMapper.map(blockbyid, BlockDto.class);
	}

	@Override
	public List<BlockDto> getAllBlock() {
		 List<Block> blocks = this.blockRepo.findAll();
		 List<BlockDto> blockdtos = blocks.stream().map(block -> this.modelMapper.map(block, BlockDto.class)).collect(Collectors.toList());
		 return blockdtos;
	}

}
