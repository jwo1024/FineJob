package com.example.findjobproject.repository

import com.example.findjobproject.entitty.CompanySatisfy
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface SatisfyRepository : JpaRepository<CompanySatisfy,Long> {

}