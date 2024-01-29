package com.example.findjobproject.repository

import com.example.findjobproject.entitty.Announcement
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository


@Repository
interface AnnouncementRepository : JpaRepository<Announcement,Long> {

    fun findAllByIndustry(industry : String):List<Announcement>
}