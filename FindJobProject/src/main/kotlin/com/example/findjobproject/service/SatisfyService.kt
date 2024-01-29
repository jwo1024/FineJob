package com.example.findjobproject.service

import com.example.findjobproject.entitty.CompanySatisfy
import com.example.findjobproject.repository.SatisfyRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class SatisfyService (
    @Autowired
    private val satisfyRepository: SatisfyRepository
){
    fun saveSatisfy(satisfy: CompanySatisfy){
        satisfyRepository.save(satisfy)
    }
    fun saveSatisfyList(satisfyList : List<CompanySatisfy>){
        satisfyList.forEach {
            saveSatisfy(it)
        }
    }
}