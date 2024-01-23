package com.example.findjobproject.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping


@Controller
class CategoryUIController {
    //테스트용 UI
    @RequestMapping
    fun mainCategoryUI() : String{
        return "mainCategory"
    }
}