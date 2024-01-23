package com.example.findjobproject.dto

import java.util.Date


//경력
data class CareerData(
    val companyName: String,
    val departmentName: String? = null,
    val dateOfEmployment: Date,
    val dateOfRetirement: Date,
    val position: String? = null,
    val dutyInCharge: String,
    val annualIncome: String? = null,
    val dutyInChargeText: String? = null,
    val career: String
)

//학교
data class EducationData(
    val schoolClassification: String,
    val schoolName: String
)
//자격증
data class CertificateData(
    val qualification: String,
    val issued: String? = null,
    val dateOfAcquisition: Date
)
//기술
data class SkillData(
    val skill: String
)
//목록 받는 dto
data class RequestData(
    val careerData: List<CareerData>,
    val educationData: List<EducationData>,
    val certificateData: List<CertificateData>,
    val skillData: List<SkillData>
)

data class ResponseData(
    val careerData: Int?,
    val educationData: Int?,
    val certificateData: Int?,
    val skillData: Int?
)
