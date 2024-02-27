"use client";

import styles from "@/styles/container-job-suitability/SuitabilityForms.module.scss";
import { useRef } from "react";
import AddButton from "./AddButton";
import { IEducationData, IResultChartData } from "./JobSuitabilityPage";

export default function EducationForm({
  complete,
  educationData,
  resultChartData,
  setEducationData,
}: {
  complete: boolean;
  educationData: IEducationData[];
  resultChartData: IResultChartData | null;
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
      {educationData.length > 0 && (
        <div className={styles.addedData}>
          {educationData.map((data, index) => (
            <div key={index} className={styles.fieldset}>
              <span className={styles.select}>
                {/* <label className={styles.label}>학교구분</label> */}
                {`${data.schoolClassification}`}
              </span>
              <span className={styles.input}>
                <label className={styles.label}>학교명</label>
                {`${data.schoolName}`}
              </span>
            </div>
          ))}
        </div>
      )}

      {!complete && (
        <form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <div className={styles.select}>
              <select
                name="school_classification"
                ref={schoolClassificationRef}
              >
                <option value="고등학교 졸업">고등학교 졸업</option>
                <option value="대학 졸업">학사 졸업</option>
                <option value="석사 졸업">석사 졸업</option>
                <option value="박사 졸업">박사 졸업</option>
              </select>
              <div className={styles.toggleIcon}>▾</div>
            </div>
            <input
              className={styles.input}
              placeholder="학교명 *"
              type="text"
              name="school_name"
              ref={schoolNameRef}
              required
            />
          </fieldset>
        </form>
      )}
      <AddButton
        achivePercent={resultChartData?.educationData}
        onClick={handleSubmit}
        complete={complete}
      />
    </section>
  );
}
