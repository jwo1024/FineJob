package com.example.findjobproject.repository

import com.example.findjobproject.entitty.Company
import org.springframework.data.jpa.repository.JpaRepository

interface CompanyRepository : JpaRepository<Company , Long> {
}