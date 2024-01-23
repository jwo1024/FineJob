package com.example.findjobproject.data

import com.example.findjobproject.entitty.Announcement
import com.example.findjobproject.entitty.Company
import com.example.findjobproject.entitty.Satisfy
import com.example.findjobproject.entitty.carrerAttibutes.Career
import com.example.findjobproject.entitty.carrerAttibutes.EducationLevel
import java.time.LocalDate

val exCompany =
    Company(
        1L,
            listOf( Announcement
                (id = 1L,
                companyName = "우리농업 주식회사",
                companyGroup = "농업그룹",
                jobTitle = "농업 생산 담당자",
                jobTag = "농업 생산",
                region = "경기도 화성시",
                career = "5년 이상",
                education = "농학 학사 이상",
                date = LocalDate.now().minusDays(2),
                tag = "농업 산업혁명",
                industry = "작물 재배업"
            ))
           ,
            Satisfy(
                1L,
                Career.FRESH, //1년 미만
                EducationLevel.COLLEGE, //대학교 졸업
                listOf("농업 기술","축산 기술","컴퓨터 관리"),
                listOf("종자 기능사","종자 기사","종자 산업기사")
            )
            ,"농업그룹"
    )
