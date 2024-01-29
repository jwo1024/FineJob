package com.example.findjobproject.service

import com.example.findjobproject.data.exAnnouncementList
import com.example.findjobproject.entitty.Announcement
import com.example.findjobproject.entitty.category.SubCategory
import com.example.findjobproject.repository.AnnouncementRepository
import jakarta.transaction.Transactional
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class AnnouncementService(
    @Autowired
    private val announcementRepository: AnnouncementRepository
) {

    @Transactional
    //기업 필터링
    fun getCompaniesByIndustry(selectCategories: List<SubCategory>): List<Announcement> {
        val resultAnnouncement: MutableList<Announcement> = mutableListOf()

        for(selectCategory in selectCategories){
            println("현재 찾는 키워드 ${selectCategory.typeOfBusiness}")
            val annoList = announcementRepository.findAllByIndustry(selectCategory.typeOfBusiness);
            annoList.forEach {
                resultAnnouncement.add(it)
            }
        }
            return resultAnnouncement
        }

    fun saveAnnouncement(announcement : Announcement){
        announcementRepository.save(announcement)
    }

    fun saveAnnouncementList(announcements : List<Announcement>){
        announcements.forEach{
            saveAnnouncement(it)
        }
    }

}