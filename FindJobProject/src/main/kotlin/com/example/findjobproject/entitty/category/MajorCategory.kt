package com.example.findjobproject.entitty.category

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.SequenceGenerator


@Entity
@SequenceGenerator(
    name = "MajorCategory_SEQ_Generator"
    , sequenceName = "MajorCategory_SEQ"
    , initialValue = 1 //처음 시작키 시작값 선정
    , allocationSize = 1 //증가값 선정
)
class MajorCategory(

    @Id
    @GeneratedValue
    val id : Long,

    val typeOfBusiness: String,

    @ManyToOne
    @JoinColumn(name = "Main_Category_Id")
    val relatedMainCategory : MainCategory

) {
    override fun toString(): String {
        return "MajorCategory(id=$id, typeOfBusiness='$typeOfBusiness', relatedMainCategory=$relatedMainCategory)"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        //현재 객체랑 받는 객체가 동일한지 확인 동일하다면 볼것도 없이 True
        if (javaClass != other?.javaClass) return false
        //자바 클래스 또한 확인

        other as MajorCategory
        //other를 MajorCategory 로 변환시키고
        
        if (id != other.id) return false
        if (typeOfBusiness != other.typeOfBusiness) return false
        if (relatedMainCategory != other.relatedMainCategory) return false
        //비교하기

        return true
    }
}