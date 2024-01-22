"use client";

import styles from "@/styles/SuitabilityForms.module.scss";
import { useRef } from "react";
import AddButton from "./AddButton";
import { ISkillData } from "./JobApplicationSuitability";

export default function SkillForm({
  skillData,
  setSkillData,
}: {
  skillData: ISkillData[];
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
      {skillData.map((data, index) => (
        <div key={index}>
          <p>{`스킬 ${data.skill}`}</p>
        </div>
      ))}
      <form>
        <fieldset>
          <input
            placeholder="자신만의 스킬을 입력해보세요!"
            type="text"
            name="skill"
            ref={skillRef}
          />
        </fieldset>
      </form>
      <AddButton text="스킬 추가" onClick={handleSubmit} />
    </section>
  );
}
