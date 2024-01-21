"use client";

import styles from "@/styles/SuitabilityForms.module.scss";
import { useRef } from "react";
import AddButton from "./AddButton";

export default function EducationForm() {
  const schoolClassificationRef = useRef<HTMLInputElement>(null);
  const schoolNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    // get value
    const schoolClassification = schoolClassificationRef.current?.value;
    const schoolName = schoolNameRef.current?.value;
    // clear ref
    if (schoolClassificationRef.current)
      schoolClassificationRef.current.value = "";
    if (schoolNameRef.current) schoolNameRef.current.value = "";
    // log
    console.log(schoolClassification, schoolName);
  };

  return (
    <section className={styles.educationForm}>
      <h4>학력</h4>
      <form>
        <fieldset>
          <input
            placeholder="학교구분 *"
            type="text"
            name="school_classification"
            ref={schoolClassificationRef}
          />
          <input
            placeholder="학교명 *"
            type="text"
            name="school_name"
            ref={schoolNameRef}
          />
        </fieldset>
      </form>
      <AddButton text="학력 추가" onClick={handleSubmit} />
    </section>
  );
}
