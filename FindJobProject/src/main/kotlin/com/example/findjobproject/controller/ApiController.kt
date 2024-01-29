package com.example.findjobproject.controller
import com.example.findjobproject.dto.RequestData
import com.example.findjobproject.dto.ResponseData
import com.example.findjobproject.entitty.Announcement
import com.example.findjobproject.entitty.category.MainCategory
import com.example.findjobproject.entitty.category.MajorCategory
import com.example.findjobproject.entitty.category.SubCategory
import com.example.findjobproject.service.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
class ApiController(
    @Autowired
    private val mainCategoryService: MainCategoryService,
    private val majorCategoryService: MajorCategoryService ,
    private val subCategoryService: SubCategoryService,
    private val announcementService : AnnouncementService,
    private val fittingDegreeService: FittingDegreeService
) {
    @GetMapping("/mainCategories")
    fun getAllMainCategories() : List<MainCategory>{
        return mainCategoryService.findAllMainCategory()
    }

    @GetMapping("/majorCategories")
    fun getAllMajorCategories() : List<MajorCategory> {
        return majorCategoryService.findAllMajorCategory()
    }
    @GetMapping("/subCategories")
    fun getAllSubCategories() : List<SubCategory> {
        return subCategoryService.findAllSubCategory()
    }

    @PostMapping("/selectCompany")
    fun selectAnnouncements(@RequestBody selectedData : List<SubCategory>) : List<Announcement> {

        return announcementService.getCompaniesByIndustry(selectedData)
    }

    @PostMapping("/somewhere")
    fun receiveEligibilityRequirementsData(@RequestBody eligibilityData : RequestData) : ResponseData{
        //receive (받다, 수신하다) Eligibility (자격, 적격성) Requirements (요건, 조건)
        println(eligibilityData.companyRecruitmentId)
        return fittingDegreeService.fittingDegreeCalculation(eligibilityData)
    }
}