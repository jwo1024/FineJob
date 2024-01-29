package com.example.findjobproject.entitty.category

import jakarta.persistence.*


@Entity
@SequenceGenerator(
    name = "SubCategory_SEQ_Generator"
    , sequenceName = "SubCategory_SEQ"
    , initialValue = 1 //처음 시작키 시작값 선정
    , allocationSize = 1 //증가값 선정
)
class DetailedCategory (
    @Id
    @GeneratedValue
    private val id : Long,

    private val typeOfBusinessCode: String,

    @ManyToOne
    @JoinColumn(name = "Sub_Category_Id")
    private val relatedSubCategory : SubCategory

)