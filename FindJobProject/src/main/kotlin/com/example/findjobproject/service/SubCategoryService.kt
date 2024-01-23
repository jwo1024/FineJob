package com.example.findjobproject.service

import com.example.findjobproject.entitty.category.SubCategory
import com.example.findjobproject.repository.SubCategoryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class SubCategoryService(
    @Autowired
    private val subCategoryRepository : SubCategoryRepository
) {
    fun findAllSubCategory(): List<SubCategory>{
        return subCategoryRepository.findAll()
    }
}