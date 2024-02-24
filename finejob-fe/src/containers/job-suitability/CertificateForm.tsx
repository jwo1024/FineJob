"use client";

import styles from "@/styles/container-job-suitability/SuitabilityForms.module.scss";
import { useRef } from "react";
import AddButton from "./AddButton";
import { ICertificateData, IResultChartData } from "./JobSuitabilityPage";

export default function CertificateForm({
  complete,
  certificateData,
  resultChartData,
  setCertificateData,
}: {
  complete: boolean;
  certificateData: ICertificateData[];
  resultChartData: IResultChartData | null;
  setCertificateData: React.Dispatch<React.SetStateAction<ICertificateData[]>>;
}) {
  const qualificationRef = useRef<HTMLInputElement>(null);
  const issuedRef = useRef<HTMLInputElement>(null);
  const dateOfAcquisitionRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const isAdded = addCertificateData();
    if (!isAdded) return;
    clearRef();
  };

  const addCertificateData = () => {
    if (
      !qualificationRef.current?.value ||
      !dateOfAcquisitionRef.current?.value
    )
      return false;
    const newCertificateData = {
      qualification: qualificationRef.current?.value,
      issued: issuedRef.current?.value,
      dateOfAcquisition: new Date(dateOfAcquisitionRef.current?.value || ""),
    };
    setCertificateData([...certificateData, newCertificateData]);
    return true;
  };

  const clearRef = () => {
    if (qualificationRef.current) qualificationRef.current.value = "";
    if (issuedRef.current) issuedRef.current.value = "";
    if (dateOfAcquisitionRef.current) dateOfAcquisitionRef.current.value = "";
  };

  return (
    <section className={styles.certificateForm}>
      <h4>자격증</h4>
      {certificateData.length > 0 && (
        <div className={styles.form}>
          {certificateData.map((data, index) => (
            <div key={index} className={styles.fieldset}>
              <span className={styles.input}>
                {/* <label className={styles.label}>자격증 명</label> */}
                {`${data.qualification}`}
              </span>
              <span className={styles.input}>
                {/* <label className={styles.label}>발행처</label> */}
                {`${data.issued}`}
              </span>
              <span className={styles.input}>
                {/* <label className={styles.label}>취득년월</label> */}
                {`${data.dateOfAcquisition.toLocaleDateString()}`}
              </span>
            </div>
          ))}
        </div>
      )}

      {!complete && (
        <form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <input
              className={styles.input}
              placeholder="자격증 명 *"
              type="text"
              name="qualification"
              ref={qualificationRef}
            />
            <input
              className={styles.input}
              placeholder="발행처"
              type="text"
              name="issued"
              ref={issuedRef}
            />
            <input
              className={styles.input}
              placeholder="취득년월 *"
              type="date"
              name="date_of_acquisition"
              ref={dateOfAcquisitionRef}
              required
            />
          </fieldset>
        </form>
      )}

      {complete && resultChartData?.certificateRequirements && (
        <div className={styles.requirements}>
          <span className={styles.text}>
            현재 필요하신 자격증을 알려드릴께요!
          </span>
          <div className={styles.tagContainer}>
            {resultChartData.certificateRequirements.map((data, index) => (
              <div key={index} className={styles.tag}>
                {data}
              </div>
            ))}
          </div>
        </div>
      )}

      <AddButton
        achivePercent={resultChartData?.certificateData}
        onClick={handleSubmit}
        complete={complete}
      />
    </section>
  );
}
