package com.example.findjobproject.entitty.category

import jakarta.persistence.*

@Entity
@SequenceGenerator(
    name = "SubCategory_SEQ_Generator"
    , sequenceName = "SubCategory_SEQ"
    , initialValue = 1 //처음 시작키 시작값 선정
    , allocationSize = 1 //증가값 선정
)
class SubCategory(
    @Id
    @GeneratedValue
    val id : Long,

    val typeOfBusiness: String,

    @ManyToOne
    @JoinColumn(name = "Major_Category_Id")
    val relatedMaJorCategory : MajorCategory

) {
    override fun toString(): String {
        return "SubCategory(id=$id, typeOfBusiness='$typeOfBusiness', relatedMaJorCategory=$relatedMaJorCategory)"
    }
}
