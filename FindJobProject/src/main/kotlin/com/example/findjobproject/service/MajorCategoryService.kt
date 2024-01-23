package com.example.findjobproject.service

import com.example.findjobproject.entitty.category.MajorCategory
import com.example.findjobproject.repository.MajorCategoryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
@Service
class MajorCategoryService (
    @Autowired
    private val majorCategoryRepository: MajorCategoryRepository
){
    fun findAllMajorCategory() : List<MajorCategory> {
        return majorCategoryRepository.findAll()
    }

}