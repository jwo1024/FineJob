"use client";

import styles from "@/styles/container-job-suitability/SuitabilityForms.module.scss";
import { useRef } from "react";
import AddButton from "./AddButton";
import { ICareerData } from "./JobSuitability";

export default function CareerForm({
  careerData,
  setCareerData,
}: {
  careerData: ICareerData[];
  setCareerData: React.Dispatch<React.SetStateAction<ICareerData[]>>;
}) {
  const companyNameRef = useRef<HTMLInputElement>(null);
  const departmentNameRef = useRef<HTMLInputElement>(null);
  const dateOfEmploymentRef = useRef<HTMLInputElement>(null);
  const dateOfRetirementRef = useRef<HTMLInputElement>(null);
  const positionRef = useRef<HTMLInputElement>(null);
  const dutyInChargeRef = useRef<HTMLInputElement>(null);
  const annualIncomeRef = useRef<HTMLInputElement>(null);
  const dutyInChargeTextRef = useRef<HTMLTextAreaElement>(null);
  const careerRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = async () => {
    const isAdded = await addCareerData();
    if (!isAdded) return;
    await clearRef();
  };

  const addCareerData = () => {
    if (
      !companyNameRef.current?.value ||
      !dutyInChargeRef.current?.value ||
      !dateOfEmploymentRef.current?.value ||
      !dateOfRetirementRef.current?.value ||
      !careerRef.current?.value
    )
      return false;
    console.log(dateOfEmploymentRef);
    const newCareerData = {
      companyName: companyNameRef.current?.value,
      departmentName: departmentNameRef.current?.value,
      dateOfEmployment: new Date(dateOfEmploymentRef.current?.value || ""),
      dateOfRetirement: new Date(dateOfRetirementRef.current?.value || ""),
      position: positionRef.current?.value,
      dutyInCharge: dutyInChargeRef.current?.value,
      annualIncome: annualIncomeRef.current?.value,
      dutyInChargeText: dutyInChargeTextRef.current?.value,
      career: careerRef.current?.value,
    };
    console.log(newCareerData);
    setCareerData([...careerData, newCareerData]);
    return true;
  };

  const clearRef = () => {
    // clear ref
    if (companyNameRef.current) companyNameRef.current.value = "";
    if (departmentNameRef.current) departmentNameRef.current.value = "";
    if (dateOfEmploymentRef.current) dateOfEmploymentRef.current.value = "";
    if (dateOfRetirementRef.current) dateOfRetirementRef.current.value = "";
    if (positionRef.current) positionRef.current.value = "";
    if (dutyInChargeRef.current) dutyInChargeRef.current.value = "";
    if (annualIncomeRef.current) annualIncomeRef.current.value = "";
    if (dutyInChargeTextRef.current) dutyInChargeTextRef.current.value = "";
  };

  return (
    <section className={styles.careerForm}>
      <h4>경력</h4>
      {careerData.map((career, key) => (
        <div key={key}>
          <p>{`회사명 ${career.companyName}`}</p>
          <p>{`부서명 ${career.departmentName}`}</p>
          <p>
            {`입사일 ${career.dateOfEmployment}\n ~ 퇴사일 ${career.dateOfRetirement}`}
          </p>
          <p>{`직급 ${career.position}`}</p>
          <p>{`담당직무 ${career.dutyInCharge}`}</p>
          <p>{`연봉 ${career.annualIncome}`}</p>
          <p>{`담당업무 상세 ${career.dutyInChargeText}`}</p>
          <p>{`경력 ${career.career}`}</p>
        </div>
      ))}
      <form>
        <fieldset>
          <input
            placeholder="회사명 *"
            type="text"
            name="company_name"
            required
            ref={companyNameRef}
          />
          <input
            placeholder="부서명"
            type="text"
            name="department_name"
            ref={departmentNameRef}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="입사일 *"
            type="date"
            name="date_of_employment"
            aria-required="true"
            required
            ref={dateOfEmploymentRef}
          />
          <input
            placeholder="퇴사일 *"
            type="date"
            name="date_of_retirement"
            required
            ref={dateOfRetirementRef}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="직급/직책"
            type="text"
            name="position"
            ref={positionRef}
          />
          <input
            placeholder="담당직무 *"
            type="text"
            name="duty_in_charge"
            ref={dutyInChargeRef}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="연봉"
            type="text"
            name="annual_income"
            ref={annualIncomeRef}
          />
          <select name="career" ref={careerRef} required>
            <option value="신입 1년 미만">신입 1년 미만</option>
            <option value="1년 이상 3년 미만">1년 이상 3년 미만</option>
            <option value="3년 이상 7년 미만">3년 이상 7년 미만</option>
            <option value="7년 이상 10년 미만">7년 이상 10년 미만</option>
            <option value="10년 이상">10년 이상</option>
          </select>
        </fieldset>
        <fieldset>
          <textarea
            placeholder={`담당직무\n담당하신 업무와 성과에 대해 작성해주세요`}
            rows={5}
            name="duty_in_charge_text"
            ref={dutyInChargeTextRef}
          />
        </fieldset>
      </form>
      <AddButton text="경력 추가" onClick={handleSubmit} />
    </section>
  );
}
