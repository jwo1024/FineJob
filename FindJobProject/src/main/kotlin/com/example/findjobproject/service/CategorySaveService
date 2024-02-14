package com.example.findjobproject.service

import com.example.findjobproject.data.MainCategoryList
import com.example.findjobproject.data.MajorCategoryList
import com.example.findjobproject.data.SubCategoryList
import com.example.findjobproject.repository.MainCategoryRepository
import com.example.findjobproject.repository.MajorCategoryRepository
import com.example.findjobproject.repository.SubCategoryRepository
import org.springframework.stereotype.Service

@Service
class CategorySaveService(
    private val mainCategoryRepository: MainCategoryRepository,
    private val majorCategoryRepository: MajorCategoryRepository,
    private val subCategoryRepository: SubCategoryRepository,
) {

    fun saveCategoryAllData(){
        MainCategoryList.forEach {
            mainCategoryRepository.save(it)
        }

        MajorCategoryList.forEach {
            majorCategoryRepository.save(it)
        }

        SubCategoryList.forEach {
            subCategoryRepository.save(it)
        }
    }
}
