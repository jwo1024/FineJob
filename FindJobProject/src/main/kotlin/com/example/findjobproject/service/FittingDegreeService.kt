package com.example.findjobproject.service

import com.example.findjobproject.data.exAnnouncementNullCompany
import com.example.findjobproject.dto.*
import com.example.findjobproject.entitty.Company
import com.example.findjobproject.entitty.carrerAttibutes.Career
import com.example.findjobproject.entitty.carrerAttibutes.EducationLevel
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class FittingDegreeService(
    @Autowired
    private val companyService: CompanyService
) {

    fun fittingDegreeCalculation(requestData: RequestData): ResponseData {
        val company = requestData.companyRecruitmentId?.let {
            //let은 Null이 아닌경우 스코프 안에 있는 값을 실행시킴
            companyService.findById(it.toLong())
        }

        return ResponseData(
            careerDataCalculation(requestData.careerData),
            educationDataCalculation(requestData.educationData),
            company?.let { certificateDataCalculation(it, requestData.certificateData) },
            company?.let { skillDataCalculation(it, requestData.skillData) }
        )
    }

    fun careerDataCalculation(careerData: List<CareerData>): Int {
        //경력에 따른 % 추출
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

    fun certificateDataCalculation(company:Company , certificateData: List<CertificateData>): Int {
        var level = 50  // 기본 레벨을 50

        println("해당 회사의 자격증 목록 ${company.satisfy.certifications}")

        val companyAnnouncement = company.satisfy.certifications
        //해당 회사의 자격증을 조회
        //1차 통과하면 이 부분을 데이터 프론트로 넘겨주고 있는지 없는지 체크하라고 검토하는게 좋을듯

        certificateData.forEach {
            if (companyAnnouncement.contains(it.qualification)) {
                level = 100
            }
        }
        return level
    }

    fun skillDataCalculation(company:Company , skillData: List<SkillData>) : Int {
        var level = 50  // 기본 레벨을 50

        println("해당 회사의 기술 목록 ${company.satisfy.skills} ")
        //1차 통과하면 이 부분을 데이터 프론트로 넘겨주고 있는지 없는지 체크하라고 검토하는게 좋을듯

        val skills = company.satisfy.skills
        //해당 회사의 기술 목록들을 조회

        skillData.forEach{
            if (skills.contains(it.skill))
                level = 100
        }
        return level
    }
}