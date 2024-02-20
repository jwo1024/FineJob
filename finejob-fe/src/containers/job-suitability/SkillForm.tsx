"use client";

import styles from "@/styles/container-job-suitability/SuitabilityForms.module.scss";
import { useRef } from "react";
import AddButton from "./AddButton";
import { IResultresultChartData, ISkillData } from "./JobSuitabilityPage";

export default function SkillForm({
  complete,
  skillData,
  resultChartData,
  setSkillData,
}: {
  complete: boolean;
  skillData: ISkillData[];
  resultChartData: IResultresultChartData | null;
  setSkillData: React.Dispatch<React.SetStateAction<ISkillData[]>>;
}) {
  const skillRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const isAdded = addSkillData();
    if (!isAdded) return;
    clearRef();
  };

  const addSkillData = () => {
    if (!skillRef.current?.value) return false;
    const newSkillData = {
      skill: skillRef.current?.value,
    };
    setSkillData([...skillData, newSkillData]);
    return true;
  };

  const clearRef = () => {
    if (skillRef.current) skillRef.current.value = "";
  };

  return (
    <section className={styles.skillForm}>
      <h4>스킬</h4>
      {skillData.length > 0 && (
        <div className={styles.form}>
          {skillData.map((data, index) => (
            <div key={index} className={styles.fieldset}>
              <span className={styles.input}>{`스킬 ${data.skill}`}</span>
            </div>
          ))}
        </div>
      )}
      {!complete && (
        <>
          <form className={styles.form}>
            <fieldset className={styles.fieldset}>
              <input
                className={styles.input}
                placeholder="자신만의 스킬을 입력해보세요!"
                type="text"
                name="skill"
                ref={skillRef}
              />
              <div className={styles.tagContainer}>
                <div className={styles.tag}>고객응대</div>
                <div className={styles.tag}>엑셀</div>
                <div className={styles.tag}>마케팅/홍보</div>
              </div>
            </fieldset>
          </form>
        </>
      )}
      {!complete && (
        <div className={styles.requirements}>
          <span className={styles.text}>
            현재 인기있는 직무 스킬을 추천해 드려요!
          </span>
          <div className={styles.tagContainer}>
            <div className={styles.tag}>공감능력</div>
            <div className={styles.tag}>문제해결능력</div>
            <div className={styles.tag}>컴퓨터활용능력</div>
            <div className={styles.tag}>고객지향성</div>
            <div className={styles.tag}>계획성</div>
            <div className={styles.tag}>분석능력</div>
          </div>
          <div className={styles.tagContainer}>
            <div className={styles.tag}>공감능력</div>
            <div className={styles.tag}>문제해결능력</div>
            <div className={styles.tag}>컴퓨터활용능력</div>
            <div className={styles.tag}>고객지향성</div>
            <div className={styles.tag}>계획성</div>
            <div className={styles.tag}>분석능력</div>
          </div>
        </div>
      )}

      {complete && resultChartData?.skillRequirements && (
        <div className={styles.requirements}>
          <span className={styles.text}>
            현재 필요하신 자격증을 알려드릴께요!
          </span>
          <div className={styles.tagContainer}>
            {resultChartData.skillRequirements.map((data, index) => (
              <div key={index} className={styles.tag}>
                {data}
              </div>
            ))}
          </div>
        </div>
      )}

      <AddButton
        achivePercent={resultChartData?.skillData}
        onClick={handleSubmit}
        complete={complete}
      />
    </section>
  );
}
