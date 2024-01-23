package com.example.findjobproject.entitty

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.OneToMany
import jakarta.persistence.OneToOne
import jakarta.persistence.SequenceGenerator

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

    @OneToMany
    val announcement: List<Announcement>, //회사 지원목록

    @OneToOne
    val satisfy: Satisfy, //회사

    val name : String, //회사이름

) {
    override fun toString(): String {
        return "Company(id=$id, announcement=$announcement, satisfy=$satisfy)"
    }
}
