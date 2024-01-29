package com.example.findjobproject.entitty.carrerAttibutes

interface CareerAttributes {
    val description: String
}

enum class Career(override val description: String) : CareerAttributes {
    FRESH("신입 1년 미만"),
    JUNIOR("1년 이상 3년 미만"),
    MID("3년 이상 7년 미만"),
    SENIOR("7년 이상 10년 미만"),
    EXPERT("10년 이상");
}

enum class EducationLevel(override val description: String) : CareerAttributes {
    HIGH_SCHOOL("고등학교 졸업"),
    COLLEGE("대학 졸업"),
    MASTER("석사 졸업"),
    DOCTOR("박사 졸업");
}
