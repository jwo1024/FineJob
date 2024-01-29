package com.example.findjobproject.entitty.category

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import jakarta.persistence.SequenceGenerator


@Entity
@SequenceGenerator (
    name = "MainCategory_SEQ_Generator"
    , sequenceName = "MainCategory_SEQ"
    , initialValue = 1 //처음 시작키 시작값 선정
    , allocationSize = 1 //증가값 선정
)
class MainCategory(

    @Id @GeneratedValue
    val id : Long,

    val typeOfBusinessCode: String,

    val typeOfBusiness: String
) {
    override fun toString(): String {
        return "MainCategory(id=$id, typeOfBusinessCode='$typeOfBusinessCode', typeOfBusiness='$typeOfBusiness')"
    }
}

