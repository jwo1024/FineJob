package com.example.findjobproject.entitty

import com.example.findjobproject.entitty.carrerAttibutes.Career
import com.example.findjobproject.entitty.carrerAttibutes.EducationLevel
import jakarta.persistence.CollectionTable
import jakarta.persistence.Column
import jakarta.persistence.ElementCollection
import jakarta.persistence.Entity
import jakarta.persistence.Enumerated
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn

@Entity
class Satisfy(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Enumerated
    val career : Career, //1년 2년 3년 단위로 입력

    @Enumerated
    val schoolBackground : EducationLevel, //고등학교 졸업 , 중학교 졸업

    @ElementCollection
    @CollectionTable(name = "skills", joinColumns = [JoinColumn(name = "satisfy_id")])
    @Column(name = "skill")
    val skills : List<String>, //자신의 Skill

    @ElementCollection
    @CollectionTable(name = "certifications", joinColumns = [JoinColumn(name = "satisfy_id")])
    @Column(name = "certification")
    val certifications: List<String>, //자격증

) {
    override fun toString(): String {
        return "Satisfy(id=$id, career=$career, schoolBackground=$schoolBackground, skill='$skills', certifications=$certifications)"
    }
}
