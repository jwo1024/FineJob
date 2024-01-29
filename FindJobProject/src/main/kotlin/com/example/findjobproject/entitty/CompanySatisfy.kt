package com.example.findjobproject.entitty

import com.example.findjobproject.entitty.carrerAttibutes.Career
import com.example.findjobproject.entitty.carrerAttibutes.EducationLevel
import jakarta.persistence.*


@Entity
@SequenceGenerator(
    name = "CompanySatisfy_SEQ_Generator",
    sequenceName = "CompanySatisfy_SEQ",
    initialValue = 1, // 처음 시작키 시작값 선정
    allocationSize = 1 // 증가값 선정
)
class CompanySatisfy(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Enumerated
    val career : Career, //1년 2년 3년 단위로 입력

    @Enumerated
    val schoolBackground : EducationLevel, //고등학교 졸업 , 중학교 졸업

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "skills", joinColumns = [JoinColumn(name = "satisfy_id")])
    @Column(name = "skill")
    val skills : List<String>, //자신의 Skill

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "certifications", joinColumns = [JoinColumn(name = "satisfy_id")])
    @Column(name = "certification")
    val certifications: List<String>, //자격증

    )
{
    override fun toString(): String {
        return "CompanySatisfy(id=$id, career=$career, schoolBackground=$schoolBackground, skills=$skills, certifications=$certifications)"
    }
}