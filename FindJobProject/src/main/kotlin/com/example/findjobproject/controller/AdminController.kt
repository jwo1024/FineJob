package com.example.findjobproject.controller

import com.example.findjobproject.data.SatisList
import com.example.findjobproject.data.exAnnouncementList
import com.example.findjobproject.data.exAnnouncementNullCompany
import com.example.findjobproject.service.AnnouncementService
import com.example.findjobproject.service.CompanyService
import com.example.findjobproject.service.SatisfyService
import com.example.findjobproject.service.CategorySaveService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/data")
class AdminController(

    @Autowired
    private val satisfyService: SatisfyService,
    private val announcementService: AnnouncementService,
    private val companyService: CompanyService,
    private val categorySaveService: CategorySaveService

) {
    @GetMapping("/satisfy/save")
    fun saveSatisfyData(){
        satisfyService.saveSatisfyList(SatisList)
    }
    @GetMapping("/companies/save")
    fun saveCompaniesList(){
        companyService.saveCompanyDataList(exAnnouncementNullCompany)
    }
    @GetMapping("/announcement/save")
    fun saveAnnouncement(){
        announcementService.saveAnnouncementList(exAnnouncementList)
    }
    
    @GetMapping("/category/save")
    fun saveCategory(){
        categorySaveService.saveCategoryAllData()
    }
}
