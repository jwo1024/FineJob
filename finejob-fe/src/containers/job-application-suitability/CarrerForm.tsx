"use client";
import styles from "@/styles/SuitabilityForms.module.scss";
import { useRef } from "react";
import AddButton from "./AddButton";

export default function CareerForm() {
  const companyNameRef = useRef<HTMLInputElement>(null);
  const departmentNameRef = useRef<HTMLInputElement>(null);
  const dateOfEmploymentRef = useRef<HTMLInputElement>(null);
  const dateOfRetirementRef = useRef<HTMLInputElement>(null);
  const positionRef = useRef<HTMLInputElement>(null);
  const dutyInChargeRef = useRef<HTMLInputElement>(null);
  const annualIncomeRef = useRef<HTMLInputElement>(null);
  const dutyInChargeTextRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    // get value
    const companyName = companyNameRef.current?.value;
    const departmentName = departmentNameRef.current?.value;
    const dateOfEmployment = dateOfEmploymentRef.current?.value;
    const dateOfRetirement = dateOfRetirementRef.current?.value;
    const position = positionRef.current?.value;
    const dutyInCharge = dutyInChargeRef.current?.value;
    const annualIncome = annualIncomeRef.current?.value;
    const dutyInChargeText = dutyInChargeTextRef.current?.value;
    // clear ref
    if (companyNameRef.current) companyNameRef.current.value = "";
    if (departmentNameRef.current) departmentNameRef.current.value = "";
    if (dateOfEmploymentRef.current) dateOfEmploymentRef.current.value = "";
    if (dateOfRetirementRef.current) dateOfRetirementRef.current.value = "";
    if (positionRef.current) positionRef.current.value = "";
    if (dutyInChargeRef.current) dutyInChargeRef.current.value = "";
    if (annualIncomeRef.current) annualIncomeRef.current.value = "";
    if (dutyInChargeTextRef.current) dutyInChargeTextRef.current.value = "";
    // log
    console.log(
      companyName,
      departmentName,
      dateOfEmployment,
      dateOfRetirement,
      position,
      dutyInCharge,
      annualIncome,
      dutyInChargeText
    );
  };

  return (
    <section className={styles.careerForm}>
      <h4>경력</h4>
      <form>
        <fieldset>
          <input
            placeholder="회사명 *"
            type="text"
            name="company_name"
            required
            ref={companyNameRef}
          />
          <input placeholder="부서명" type="text" name="department_name" />
        </fieldset>
        <fieldset>
          <input
            placeholder="입사년월 *"
            type="date"
            name="date_of_employment"
            aria-required="true"
            required
          />
          <input
            placeholder="퇴사년월 *"
            type="date"
            name="date_of_retirement"
            required
          />
        </fieldset>
        <fieldset>
          <input placeholder="직급/직책" type="text" name="position" />
          <input placeholder="담당직무 *" type="text" name="duty_in_charge" />
        </fieldset>
        <fieldset>
          <input placeholder="연봉" type="text" name="annual_income" />
        </fieldset>
        <fieldset>
          <textarea
            placeholder={`담당직무\n담당하신 업무와 성과에 대해 작성해주세요`}
            rows={5}
            name="duty_in_charge_text"
          />
        </fieldset>
      </form>
      <AddButton text="경력 추가" onClick={handleSubmit} />
    </section>
  );
}
