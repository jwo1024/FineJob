import styles from "@/styles/JobApplicationSuitability.module.scss";
import {
  CareerForm,
  EducationForm,
  CertificateForm,
  SkillForm,
} from "./SuitabilityForms";
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
        <ChartCaption width={1100} />
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

function ChartCaption({ width, height }: { width?: number; height?: number }) {
  return (
    <div
      className={styles.chartCaption}
      data-width={width}
      data-height={height}
    >
      <span>
        <div>경력</div>
        <div>무관</div>
      </span>
      <span>
        <div>학력</div>
        <div>무관</div>
      </span>
      <span>
        <div>자격증</div>
        <div>85% 달성</div>
      </span>
      <span>
        <div>스킬</div>
        <div>70% 달성</div>
      </span>
    </div>
  );
}
