package com.example.findjobproject.data

import com.example.findjobproject.entitty.carrerAttibutes.Career
import com.example.findjobproject.entitty.carrerAttibutes.EducationLevel
import com.example.findjobproject.entitty.CompanySatisfy

val ex1Satisfaction = CompanySatisfy(
    1,
    Career.SENIOR,
    EducationLevel.COLLEGE,
    skills = listOf("농업", "생산"),
    certifications = listOf("종자 기능사", "종자 기사", "종자 산업 기사")
)

val ex2Satisfaction = CompanySatisfy(
    2,
    Career.SENIOR,
    EducationLevel.COLLEGE,
    listOf("축산", "사육"),
    listOf("축산 기능사", "축산 기사", "축산 산업 기사")
)

val ex3Satisfaction = CompanySatisfy(
    3,
    Career.MID,
    EducationLevel.MASTER,
    listOf("어로", "어업 연구"),
    listOf("어로 어업 기능사", "어로 어업 기사", "어로 어업 산업 기사")
)

val ex4Satisfaction = CompanySatisfy(
    4,
    Career.EXPERT,
    EducationLevel.HIGH_SCHOOL,
    listOf("축산", "전문"),
    listOf("축산 전문가 자격증", "축산 기술사", "축산학 박사")
)

val ex5Satisfaction = CompanySatisfy(
    5,
    Career.MID,
    EducationLevel.COLLEGE,
    listOf("임업", "기술"),
    listOf("임업 기술사", "임업 기술 산업기사", "임업 기술 전문가")
)

val ex6Satisfaction = CompanySatisfy(
    6,
    Career.SENIOR,
    EducationLevel.DOCTOR,
    listOf("입업 서비스"),
    listOf("입업 서비스 자격증", "서비스 혁신 전문가")
)

val ex7Satisfaction = CompanySatisfy(
    7,
    Career.EXPERT,
    EducationLevel.HIGH_SCHOOL,
    listOf("수렵 서비스"),
    listOf("수렵 서비스 자격증", "지속 가능한 서비스 전문가")
)

val SatisList = listOf(
    ex1Satisfaction, ex2Satisfaction,
    ex3Satisfaction, ex4Satisfaction,
    ex5Satisfaction, ex6Satisfaction,
    ex7Satisfaction
)