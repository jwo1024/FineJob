package com.example.findjobproject.service

import com.example.findjobproject.entitty.Company
import com.example.findjobproject.repository.CompanyRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CompanyService(
    @Autowired
    private val companyRepository: CompanyRepository
) {
    fun saveCompanyData(company : Company){
        companyRepository.save(company)
    }

    fun saveCompanyDataList(companyList : List<Company>){
        companyList.forEach {
            saveCompanyData(it)
        }
    }
    fun findById(id : Long) : Company{
        return companyRepository.findById(id).orElse(null)
    }
}