"use client";
import JobSearchResult from "@/containers/job-search/JobSearchResult";
import JobSearchFilter from "@/containers/job-search/JobSearchFilter";
import { useState } from "react";

export interface ISearchResult {
  // 임시타입
  companyRecruitmentId: number; // TODO id 추가
  companyName?: string;
  companyGroup?: string;
  jobTitle?: string;
  jobTag?: string;
  region?: string;
  career?: string;
  education?: string;
  date?: string;
  tag?: string;
}

const dummyData: ISearchResult[] = [
  {
    companyRecruitmentId: 1,
    companyName: "삼성전자",
    companyGroup: "삼성그룹",
    jobTitle: "웹 프론트엔드 개발자",
    jobTag: "웹 프론트엔드 개발자",
    region: "서울",
    career: "신입",
    education: "학력무관",
    date: "2021-09-30",
    tag: "우대",
  },
  {
    companyRecruitmentId: 1,
    companyName: "(주)유니에스",
    companyGroup: "유니에스그룹",
    jobTitle: `[보라매역] 신한카드 서울발급지원센터 서류심사직 채용`,
    jobTag: "사무직 | 사무보조 | 사무행정 | Excel | QA 외",
    region: "서울 동작구 외",
    career: "경력 정규직",
    education: "학력무관",
    date: "2일 전 등록",
  },
  {
    companyRecruitmentId: 1,
    companyName: "삼성전자삼성전자삼성전자",
    companyGroup: "삼성그룹삼성그룹삼성그룹삼성그룹",
    jobTitle: "웹 프론트엔드 개발자",
    jobTag: "웹 프론트엔드 개발자",
    region: "서울",
    career: "신입 | 경력 정규직",
    education: "학력무관",
    date: "2021-09-30",
    tag: "우대",
  },
];

export default function JobSearchPage() {
  // const [searchResultList, setSearchResultList] = useState<ISearchResult[]>([]);
  // const [searchResultCnt, setSearchResultCnt] = useState<number>(0);

  //dummyData 적용
  const [searchResultList, setSearchResultList] =
    useState<ISearchResult[]>(dummyData);
  const [searchResultCnt, setSearchResultCnt] = useState<number>(
    dummyData.length
  );

  return (
    <>
      <JobSearchFilter
        setSearchResultList={setSearchResultList}
        setSearchResultCnt={setSearchResultCnt}
      />
      {searchResultCnt ? (
        <JobSearchResult
          searchResultList={searchResultList}
          searchResultCnt={searchResultCnt}
        />
      ) : undefined}
    </>
  );
}
