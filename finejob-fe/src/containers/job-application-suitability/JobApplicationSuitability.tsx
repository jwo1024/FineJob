import styles from "@/styles/JobApplicationSuitability.module.scss";
import CareerForm from "./CarrerForm";
import EducationForm from "./EducationForm";
import CertificateForm from "./CertificateForm";
import SkillForm from "./SkillForm";
import dynamic from "next/dynamic";
const SuitabilityChart = dynamic(() => import("./SuitabilityChart"), {
  ssr: false,
});

export default function JobApplicationSuitability() {
  return (
    <section className={styles.mainSection}>
      <h3>지원 적합도</h3>
      <div>
        <SuitabilityChart
          valueCarrer={0}
          valueEducation={0}
          valueCertificate={80}
          valueSkill={70}
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

      <div className={styles.forms}>
        <CareerForm />
        <EducationForm />
        <CertificateForm />
        <SkillForm />
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
