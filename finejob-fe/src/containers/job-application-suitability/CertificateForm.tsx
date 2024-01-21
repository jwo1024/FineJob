"use client";
import styles from "@/styles/SuitabilityForms.module.scss";
import { useRef } from "react";
import AddButton from "./AddButton";

export default function CertificateForm() {
  const qualificationRef = useRef<HTMLInputElement>(null);
  const issuedRef = useRef<HTMLInputElement>(null);
  const dateOfAcquisitionRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    // get value
    const qualification = qualificationRef.current?.value;
    const issued = issuedRef.current?.value;
    const dateOfAcquisition = dateOfAcquisitionRef.current?.value;
    // clear ref
    if (qualificationRef.current) qualificationRef.current.value = "";
    if (issuedRef.current) issuedRef.current.value = "";
    if (dateOfAcquisitionRef.current) dateOfAcquisitionRef.current.value = "";
    // log
    console.log(qualification, issued, dateOfAcquisition);
  };

  return (
    <section className={styles.certificateForm}>
      <h4>자격증</h4>
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
