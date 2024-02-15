"use client";

import styles from "@/styles/container-job-suitability/SuitabilityForms.module.scss";
import { useRef } from "react";
import AddButton from "./AddButton";
import { IEducationData } from "./JobSuitability";

export default function EducationForm({
  educationData,
  setEducationData,
}: {
  educationData: IEducationData[];
  setEducationData: React.Dispatch<React.SetStateAction<IEducationData[]>>;
}) {
  const schoolClassificationRef = useRef<HTMLSelectElement>(null);
  const schoolNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const isAdded = addEducationData();
    if (!isAdded) return;
    clearRef();
  };

  const addEducationData = () => {
    if (
      !schoolClassificationRef.current?.value ||
      !schoolNameRef.current?.value
    )
      return false;
    const newEducationData = {
      schoolClassification: schoolClassificationRef.current?.value,
      schoolName: schoolNameRef.current?.value,
    };
    setEducationData([...educationData, newEducationData]);
    return true;
  };

  const clearRef = () => {
    if (schoolClassificationRef.current)
      schoolClassificationRef.current.value = "";
    if (schoolNameRef.current) schoolNameRef.current.value = "";
  };

  return (
    <section className={styles.educationForm}>
      <h4>학력</h4>
      {educationData.map((data, index) => (
        <div key={index}>
          <p>{`학교구분 ${data.schoolClassification}`}</p>
          <p>{`학교명 ${data.schoolName}`}</p>
        </div>
      ))}
      <form>
        <fieldset>
          <select name="school_classification" ref={schoolClassificationRef}>
            <option value="고등학교 졸업">고등학교 졸업</option>
            <option value="대학 졸업">학사 졸업</option>
            <option value="석사 졸업">석사 졸업</option>
            <option value="박사 졸업">박사 졸업</option>
          </select>
          <input
            placeholder="학교명 *"
            type="text"
            name="school_name"
            ref={schoolNameRef}
            required
          />
        </fieldset>
      </form>
      <AddButton text="학력 추가" onClick={handleSubmit} />
    </section>
  );
}
