package com.example.findjobproject.repository

import com.example.findjobproject.entitty.category.MainCategory
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface MainCategoryRepository : JpaRepository<MainCategory,Long>{

}