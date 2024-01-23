"use client";

import styles from "@/styles/JobApplicationSuitability.module.scss";
import CareerForm from "./CarrerForm";
import EducationForm from "./EducationForm";
import CertificateForm from "./CertificateForm";
import SkillForm from "./SkillForm";
import dynamic from "next/dynamic";
const SuitabilityChart = dynamic(() => import("./SuitabilityChart"), {
  ssr: false,
});
import { useState } from "react";

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

export default function JobApplicationSuitability() {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [careerData, setCareerData] = useState<ICareerData[]>([]);
  const [educationData, setEducationData] = useState<IEducationData[]>([]);
  const [certificateData, setCertificateData] = useState<ICertificateData[]>(
    []
  );
  const [skillData, setSkillData] = useState<ISkillData[]>([]);

  const [chartData, setChartData] = useState<{
    careerData?: number;
    educationData?: number;
    certificateData?: number;
    skillData?: number;
  } | null>(null);

  const handleSubmit = () => {

    // TODO : BE api 연결
    const requestData = {
      careerData,
      educationData,
      certificateData,
      skillData,
    };
    console.log(requestData);

    setIsButtonDisabled(true);
    fetch(`http://localhost:8080/api/somewhere`, {
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
        setChartData({
          careerData: data?.careerData,
          educationData: data?.educationData,
          certificateData: data?.certificateData,
          skillData: data?.skillData,
        });
      })
      .catch((err) => {
        console.log(err);

        setIsButtonDisabled(false);
      });
  };

  return (
    <section className={styles.mainSection}>
      <h3>지원 적합도</h3>
      {chartData ? (
        <div>
          <SuitabilityChart
            valueCarrer={chartData?.careerData}
            valueEducation={chartData?.educationData}
            valueCertificate={chartData?.certificateData}
            valueSkill={chartData?.skillData}
            width={1100}
            height={180}
          />
          <ChartCaption
            width={1100}
            careerStatus={undefined}
            educationStatus={undefined}
            certificateStatus={85}
            skillStatus={70}
          />
        </div>
      ) : undefined}
      <div className={styles.forms}>
        <CareerForm careerData={careerData} setCareerData={setCareerData} />
        <EducationForm
          educationData={educationData}
          setEducationData={setEducationData}
        />
        <CertificateForm
          certificateData={certificateData}
          setCertificateData={setCertificateData}
        />
        <SkillForm skillData={skillData} setSkillData={setSkillData} />
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
    </section>
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
        <div>경력</div>
        <div>{careerStatus ? `${careerStatus}% 달성` : "무관"}</div>
      </span>
      <span>
        <div>학력</div>
        <div>{educationStatus ? `${educationStatus}% 달성` : "무관"}</div>
      </span>
      <span>
        <div>자격증</div>
        <div>{certificateStatus ? `${certificateStatus}% 달성` : "무관"}</div>
      </span>
      <span>
        <div>스킬</div>
        <div>{skillStatus ? `${skillStatus}% 달성` : "무관"}</div>
      </span>
    </div>
  );
}
