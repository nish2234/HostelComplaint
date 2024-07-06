package com.blog.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.blog.entities.Post;

public interface PostRepo extends JpaRepository<Post, Integer>{
    @Query(value ="select * from Post where block_bid = :bid and category_cid = :cid" ,nativeQuery = true)
    public List<Post> getPost(@Param("cid") Integer cid , @Param("bid") Integer pid);
}
