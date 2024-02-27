"use client";

import styles from "@/styles/container-job-suitability/JobSuitability.module.scss";
import CareerForm from "./CarrerForm";
import EducationForm from "./EducationForm";
import CertificateForm from "./CertificateForm";
import SkillForm from "./SkillForm";
import dynamic from "next/dynamic";
const SuitabilityChart = dynamic(() => import("./SuitabilityChart"), {
  ssr: false,
});
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export interface ICareerData {
  companyName: string; // 회사명
  departmentName?: string; // 부서명
  dateOfEmployment: Date; // 입사일
  dateOfRetirement: Date; // 퇴사일
  position?: string; // 직급
  dutyInCharge: string; // 담당직무
  annualIncome?: string; // 연봉
  dutyInChargeText?: string; // 담당업무 상세
  career: string; // 경력
}
export interface IEducationData {
  schoolClassification: string; // 학교구분
  schoolName: string; // 학교명
}
export interface ICertificateData {
  qualification: string; // 자격증명
  issued?: string; // 발행처
  dateOfAcquisition: Date; // 취득년월
}
export interface ISkillData {
  skill: string; // 스킬
}

export interface IResultChartData {
  careerData?: number;
  educationData?: number;
  certificateData?: number;
  skillData?: number;
  careerRequirements?: string[];
  educationRequirements?: string[];
  certificateRequirements?: string[];
  skillRequirements?: string[];
}

export default function JobSuitabilityPage() {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);
  const [careerData, setCareerData] = useState<ICareerData[]>([]);
  const [educationData, setEducationData] = useState<IEducationData[]>([]);
  const [certificateData, setCertificateData] = useState<ICertificateData[]>(
    []
  );
  const [skillData, setSkillData] = useState<ISkillData[]>([]);

  const [resultChartData, setResultChartData] =
    useState<IResultChartData | null>(null);

  const [companyRecruitmentId, setCompanyRecruitmentId] = useState<
    number | null
  >(null);
  const searchParam = useSearchParams();

  const [errMsg, setErrMsg] = useState<string>("");
  useEffect(() => {
    const param = searchParam.get("companyRecruitmentId");
    console.log(param);
    setCompanyRecruitmentId(param ? Number(param) : null);

    if (!param) setErrMsg("companyRecruitmentId가 존재하지 않습니다.");
  }, []);

  const handleSubmit = () => {
    // TODO : BE api 연결
    const requestData = {
      companyRecruitmentId,
      careerData,
      educationData,
      certificateData,
      skillData,
    };
    console.log(requestData);

    setIsButtonDisabled(true);
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/somewhere`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("서버 통신 오류");
        return res.json();
      })
      .then((data) => {
        // TODO : BE에서 받은 데이터 처리
        // value가 undefined 로 오면 "무관" 으로 출력됨
        setResultChartData({
          careerData: data?.careerData,
          educationData: data?.educationData,
          certificateData: data?.certificateData,
          skillData: data?.skillData,
          // careerRequirements: data?.careerRequirements,
          // educationRequirements: data?.educationRequirements,
          certificateRequirements: data?.certificateRequirements,
          skillRequirements: data?.skillRequirements,
        });
        setComplete(true);
      })
      .catch((err) => {
        console.log(err);
        setErrMsg("서버 통신 오류");
        setIsButtonDisabled(false);
      });
  };

  return (
    <>
      {!complete ? <h3>지원 적합도</h3> : <h3>지원 적합도 결과</h3>}

      {errMsg && <span>{errMsg}</span>}

      <div className={styles.container}>
        {resultChartData ? (
          <div>
            <SuitabilityChart
              valueCarrer={resultChartData?.careerData}
              valueEducation={resultChartData?.educationData}
              valueCertificate={resultChartData?.certificateData}
              valueSkill={resultChartData?.skillData}
              width={1100}
              height={180}
            />
            <ChartCaption
              width={1100}
              careerStatus={resultChartData?.careerData}
              educationStatus={resultChartData?.educationData}
              certificateStatus={resultChartData?.certificateData}
              skillStatus={resultChartData?.skillData}
            />
          </div>
        ) : undefined}
      </div>
      {!complete ? undefined : <h3>필요 요건 분석</h3>}
      <div className={styles.container}>
        <div className={styles.forms}>
          <CareerForm
            careerData={careerData}
            setCareerData={setCareerData}
            complete={complete}
            resultChartData={resultChartData}
          />
          <EducationForm
            educationData={educationData}
            setEducationData={setEducationData}
            complete={complete}
            resultChartData={resultChartData}
          />
          <CertificateForm
            certificateData={certificateData}
            setCertificateData={setCertificateData}
            complete={complete}
            resultChartData={resultChartData}
          />
          <SkillForm
            skillData={skillData}
            setSkillData={setSkillData}
            complete={complete}
            resultChartData={resultChartData}
          />
        </div>
        <div>
          <button
            className={styles.submitButton}
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? "측정완료" : "측정하기"}
          </button>
        </div>
      </div>
    </>
  );
}

function ChartCaption({
  width,
  height,
  careerStatus,
  educationStatus,
  certificateStatus,
  skillStatus,
}: {
  width?: number;
  height?: number;
  careerStatus?: number;
  educationStatus?: number;
  certificateStatus?: number;
  skillStatus?: number;
}) {
  return (
    <div
      className={styles.chartCaption}
      data-width={width}
      data-height={height}
    >
      <span>
        <div className={styles.title}>경력</div>
        <div>{careerStatus ? `${careerStatus}% 달성` : "무관"}</div>
      </span>
      <span>
        <div className={styles.title}>학력</div>
        <div>{educationStatus ? `${educationStatus}% 달성` : "무관"}</div>
      </span>
      <span>
        <div className={styles.title}>자격증</div>
        <div>{certificateStatus ? `${certificateStatus}% 달성` : "무관"}</div>
      </span>
      <span>
        <div className={styles.title}>스킬</div>
        <div>{skillStatus ? `${skillStatus}% 달성` : "무관"}</div>
      </span>
    </div>
  );
}
