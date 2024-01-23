package com.example.findjobproject.repository

import com.example.findjobproject.entitty.category.MajorCategory
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface MajorCategoryRepository : JpaRepository<MajorCategory, Long>{
}