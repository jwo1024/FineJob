package com.example.findjobproject.entitty

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import jakarta.persistence.*
import java.time.LocalDate

@Entity
@SequenceGenerator(
    name = "Announcement_SEQ_Generator",
    sequenceName = "Announcement_SEQ",
    initialValue = 1, // 처음 시작키 시작값 선정
    allocationSize = 1 // 증가값 선정
)
class Announcement (
    @Id
    @GeneratedValue
    val id: Long ,

    val companyName: String,

    val companyGroup: String,

    val jobTitle: String,

    val jobTag: String,

    val region: String,

    val career: String,

    val education: String,

    val date: LocalDate,

    val tag: String,

    val industry : String,

    @ManyToOne(fetch = FetchType.EAGER) // 즉시 조회로 값을 조회
    @JoinColumn(name = "company_id")
    var companyRecruitmentId : Company

){
    override fun toString(): String {
        return "Announcement(id=$id, companyName='$companyName', companyGroup='$companyGroup', jobTitle='$jobTitle', jobTag='$jobTag', region='$region', career='$career', education='$education', date=$date, tag='$tag', industry='$industry', companyRecruitmentId=$companyRecruitmentId)"
    }
}