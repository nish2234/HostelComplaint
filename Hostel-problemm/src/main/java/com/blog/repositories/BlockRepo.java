package com.blog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blog.entities.Block;

public interface BlockRepo extends JpaRepository<Block, Integer> {

}
