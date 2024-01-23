package com.example.findjobproject.service

import com.example.findjobproject.data.exAnnouncementList
import com.example.findjobproject.entitty.Announcement
import com.example.findjobproject.entitty.category.SubCategory
import org.springframework.stereotype.Service


@Service
class AnnouncementService {

    //기업 필터링
    fun getCompaniesByIndustry(selectCategories: List<SubCategory>): List<Announcement> {
        val resultAnnouncement: MutableList<Announcement> = mutableListOf()

        for (selectCategory in selectCategories) {
            for (announcement in exAnnouncementList){
                if (selectCategory.typeOfBusiness.equals(announcement.industry)){
                    resultAnnouncement.add(announcement)
                }
            }
        }
        return resultAnnouncement
    }
}