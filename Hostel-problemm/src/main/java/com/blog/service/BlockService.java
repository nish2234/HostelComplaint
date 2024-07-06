package com.blog.service;

import java.util.List;

import com.blog.payloads.BlockDto;

public interface BlockService {
      public BlockDto createBlock(BlockDto blockDto);
      public BlockDto getBlockById(Integer bid);
      public List<BlockDto> getAllBlock();
}
