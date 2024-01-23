package com.example.findjobproject.service

import com.example.findjobproject.data.exCompany
import com.example.findjobproject.dto.*
import com.example.findjobproject.entitty.carrerAttibutes.Career
import com.example.findjobproject.entitty.carrerAttibutes.EducationLevel
import org.springframework.stereotype.Service


@Service
class FittingDegreeService {

    fun fittingDegreeCalculation(requestData: RequestData): ResponseData {
        return ResponseData(
            careerDataCalculation(requestData.careerData),
            educationDataCalculation(requestData.educationData),
            certificateDataCalculation(requestData.certificateData),
            skillDataCalculation(requestData.skillData)
        )
    }

    fun careerDataCalculation(careerData: List<CareerData>): Int {
        var maxCareerLevel = 0

        careerData.forEach {
            val currentCareer = when (it.career) {
                Career.FRESH.description-> 50
                Career.JUNIOR.description -> 70
                Career.MID.description -> 80
                Career.SENIOR.description -> 90
                Career.EXPERT.description -> 100
                else -> 0
            }

            if (currentCareer > maxCareerLevel) {
                maxCareerLevel = currentCareer
            }
        }

        return maxCareerLevel
    }
    fun educationDataCalculation(educationData: List<EducationData>): Int {
        var maxEducationLevel = 0

        educationData.forEach {
            val currentEducationLevel = when (it.schoolClassification) {
                EducationLevel.HIGH_SCHOOL.description -> 50
                EducationLevel.COLLEGE.description -> 70
                EducationLevel.MASTER.description -> 80
                EducationLevel.DOCTOR.description -> 100
                else -> 0
            }
            if (currentEducationLevel > maxEducationLevel) {
                maxEducationLevel = currentEducationLevel
            }
        }

        return maxEducationLevel
    }

    fun certificateDataCalculation(certificateData: List<CertificateData>): Int {
        var level = 50  // 기본 레벨을 50

        val companyAnnouncement = exCompany.satisfy.certifications.map { it }

        certificateData.forEach {
            if (companyAnnouncement.contains(it.issued)) {
                level = 100
            }
        }
        return level
    }

    fun skillDataCalculation(skillData: List<SkillData>) : Int {
        var level = 50  // 기본 레벨을 50

        val skill = exCompany.satisfy.skills.map { it }

        skillData.forEach{
            if (it.equals(skill))
                level = 100
        }

        return level
    }
}