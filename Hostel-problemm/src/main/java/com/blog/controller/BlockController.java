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

import com.blog.payloads.BlockDto;
import com.blog.service.BlockService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/")
public class BlockController {
      
	@Autowired
	private BlockService blockService;
	
	@PostMapping("block")
	public ResponseEntity<BlockDto> createBlockController(@RequestBody BlockDto blockdto){
		BlockDto createBlock = this.blockService.createBlock(blockdto);
		return new ResponseEntity<BlockDto>(createBlock , HttpStatus.CREATED);
	}
	
	@GetMapping("/block/{bid}")
	public ResponseEntity<BlockDto> getBlockByIdController(@PathVariable("bid") Integer bid){
		BlockDto blockById = this.blockService.getBlockById(bid);
		return new ResponseEntity<BlockDto>(blockById , HttpStatus.OK);
	}
	
	@GetMapping("block/post")
	public ResponseEntity<List<BlockDto>> getAllBlock(){
		List<BlockDto> allBlock = this.blockService.getAllBlock();
		return new ResponseEntity<List<BlockDto>>(allBlock , HttpStatus.OK);
	}
	
}
