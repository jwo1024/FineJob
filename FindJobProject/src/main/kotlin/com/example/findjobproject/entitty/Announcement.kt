package com.example.findjobproject.entitty

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import java.time.LocalDate

@Entity
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

    val industry : String
){
    override fun toString(): String {
        return "Announcement(id=$id, companyName='$companyName', companyGroup='$companyGroup', jobTitle='$jobTitle', jobTag='$jobTag', region='$region', career='$career', education='$education', date=$date, tag='$tag', industry='$industry')"
    }
}