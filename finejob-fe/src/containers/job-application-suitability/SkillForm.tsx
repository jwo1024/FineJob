"use client";

import styles from "@/styles/SuitabilityForms.module.scss";
import { useRef } from "react";
import AddButton from "./AddButton";

export default function SkillForm() {
  const skillRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    // get value
    const skill = skillRef.current?.value;
    // clear ref
    if (skillRef.current) skillRef.current.value = "";
    // log
    console.log(skill);
  };

  return (
    <section className={styles.skillForm}>
      <h4>스킬</h4>
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
