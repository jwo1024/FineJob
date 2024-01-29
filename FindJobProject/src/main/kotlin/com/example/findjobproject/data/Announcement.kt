package com.example.findjobproject.data

import com.example.findjobproject.entitty.Announcement
import java.time.LocalDate


// 예시 데이터 생성
val ex1 = Announcement(
    id = 1L,
    companyName = "우리농업 주식회사",
    companyGroup = "농업그룹",
    jobTitle = "농업 생산 담당자",
    jobTag = "농업 생산",
    region = "경기도 화성시",
    career = "5년 이상",
    education = "농학 학사 이상",
    date = LocalDate.now().minusDays(2),
    tag = "농업 산업혁명",
    industry = "작물 재배업",
    companyRecruitmentId = exAnnouncementNullCompany[0] //실제로는 회사 데이터 찾아서 넣기
)

val ex2 = Announcement(
    id = 2L,
    companyName = "한우축산 주식회사",
    companyGroup = "축산그룹",
    jobTitle = "축산 사육사",
    jobTag = "한우 사육",
    region = "전라북도 전주시",
    career = "3년 이상",
    education = "축산학 전공자 우대",
    date = LocalDate.now().minusDays(2),
    tag = "한우 고급화 프로젝트",
    industry = "축산업",
    companyRecruitmentId = exAnnouncementNullCompany[1] //실제로는 회사 번호 찾아서 넣기
)

val ex3 = Announcement(
    id = 3L,
    companyName = "어로 어업 주식회사",
    companyGroup = "어로 어업 그룹",
    jobTitle = "어로 어업 연구원",
    jobTag = "어로 어업 연구",
    region = "부산광역시 해운대구",
    career = "4년 이상",
    education = "수산학 석사 이상",
    date = LocalDate.now().minusDays(3),
    tag = "어로 어업 지속가능성 연구",
    industry = "어로 어업",
    companyRecruitmentId = exAnnouncementNullCompany[2]

)

val ex4 = Announcement(
    id = 4L,
    companyName = "축산전문 주식회사",
    companyGroup = "축산전문 그룹",
    jobTitle = "축산 전문가",
    jobTag = "축산 전문",
    region = "대전광역시 유성구",
    career = "6년 이상",
    education = "축산학 박사 이상",
    date = LocalDate.now().minusDays(3),
    tag = "고급 축산산업 지도",
    industry = "축산업",
    companyRecruitmentId = exAnnouncementNullCompany[3]
)

val ex5 = Announcement(
    id = 5L,
    companyName = "임업 주식회사",
    companyGroup = "임업 그룹",
    jobTitle = "임업 기술자",
    jobTag = "임업 기술",
    region = "강원도 원주시",
    career = "4년 이상",
    education = "임업 관련 학사 이상",
    date = LocalDate.now().minusDays(4),
    tag = "지속 가능한 임업 프로젝트",
    industry = "임업",
    companyRecruitmentId = exAnnouncementNullCompany[4]
)

val ex6 = Announcement(
    id = 6L,
    companyName = "입업관련 서비스 주식회사",
    companyGroup = "서비스업 그룹",
    jobTitle = "입업 서비스 전문가",
    jobTag = "입업 서비스",
    region = "서울특별시 강남구",
    career = "3년 이상",
    education = "입업 서비스 관련 학사 이상",
    date = LocalDate.now().minusDays(4),
    tag = "입업 관련 혁신적인 서비스",
    industry = "양식어업 및 어업관련 서비스업",
    companyRecruitmentId = exAnnouncementNullCompany[5]

)

val ex7 = Announcement(
    id = 7L,
    companyName = "수렵 및 관련 서비스 주식회사",
    companyGroup = "서비스업 그룹",
    jobTitle = "수렵 및 관련 서비스 전문가",
    jobTag = "수렵 서비스",
    region = "인천광역시 남동구",
    career = "5년 이상",
    education = "수렵 서비스 관련 학사 이상",
    date = LocalDate.now().minusDays(5),
    tag = "지속 가능한 수렵 서비스",
    industry = "수렵 및 관련 서비스업",
    companyRecruitmentId = exAnnouncementNullCompany[6]
)

val exAnnouncementList = listOf(ex1,ex2,ex3,ex4,ex5,ex6,ex7)

