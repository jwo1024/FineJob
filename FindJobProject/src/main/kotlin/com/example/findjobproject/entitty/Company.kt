package com.example.findjobproject.entitty

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*

@Entity
@SequenceGenerator(
    name = "Company_SEQ_Generator",
    sequenceName = "Company_SEQ",
    initialValue = 1, // 처음 시작키 시작값 선정
    allocationSize = 1 // 증가값 선정
)
class Company(
    @Id
    @GeneratedValue
    var id: Long,

    @OneToMany(fetch = FetchType.EAGER) //즉시조회로 다 가지고오기
    val announcement: MutableList<Announcement>? = null, //회사 지원목록

    @OneToOne
    val satisfy: CompanySatisfy, //회사 입사 요건

    val name : String, //회사이름


) {
    override fun toString(): String {
        return "Company(id=$id, announcement=$announcement, satisfy=$satisfy)"
    }
}
