"use client";

import styles from "@/styles/container-job-suitability/SuitabilityForms.module.scss";
import { useRef } from "react";
import AddButton from "./AddButton";
import { ICertificateData } from "./JobSuitability";

export default function CertificateForm({
  certificateData,
  setCertificateData,
}: {
  certificateData: ICertificateData[];
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
      {certificateData.map((data, index) => (
        <div key={index}>
          <p>{`자격증명 ${data.qualification}`}</p>
          <p>{`발행처 ${data.issued}`}</p>
          <p>{`취득년월 ${data.dateOfAcquisition}`}</p>
        </div>
      ))}
      <form>
        <fieldset>
          <input
            placeholder="자격증 명 *"
            type="text"
            name="qualification"
            ref={qualificationRef}
          />
          <input
            placeholder="발행처"
            type="text"
            name="issued"
            ref={issuedRef}
          />
          <input
            placeholder="취득년월 *"
            type="date"
            name="date_of_acquisition"
            ref={dateOfAcquisitionRef}
            required
          />
        </fieldset>
      </form>
      <AddButton text="자격증 추가" onClick={handleSubmit} />
    </section>
  );
}
