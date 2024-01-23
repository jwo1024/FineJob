package com.example.findjobproject.repository

import com.example.findjobproject.entitty.category.SubCategory
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface SubCategoryRepository : JpaRepository<SubCategory, Long>{

}