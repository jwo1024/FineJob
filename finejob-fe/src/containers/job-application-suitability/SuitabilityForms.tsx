import styles from "@/styles/SuitabilityForms.module.scss";
import { IconCirclePlus } from "@/components/Icons";

function CareerForm() {
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
      <AddButton text="경력 추가" />
    </section>
  );
}



function EducationForm() {
  return (
    <section className={styles.educationForm}>
      <h4>학력</h4>
      <form>
        <fieldset>
          <input
            placeholder="학교구분 *"
            type="text"
            name="school_classification"
          />
          <input placeholder="학교명 *" type="text" name="school_name" />
        </fieldset>
      </form>
      <AddButton text="학력 추가" />
    </section>
  );
}



function CertificateForm() {
  return (
    <section className={styles.certificateForm}>
      <h4>자격증</h4>
      <form>
        <fieldset>
          <input placeholder="자격증 명 *" type="text" name="qualification" />
          <input placeholder="발행처" type="text" name="issued" />
          <input
            placeholder="취득년월 *"
            type="date"
            name="date_of_acquisition"
            required
          />
        </fieldset>
      </form>
      <AddButton text="자격증 추가" />
    </section>
  );
}



function SkillForm() {
  return (
    <section className={styles.skillForm}>
      <h4>스킬</h4>
      <form>
        <fieldset>
          <input
            placeholder="자신만의 스킬을 입력해보세요!"
            type="text"
            name="skill"
          />
        </fieldset>
      </form>
      <AddButton text="스킬 추가" />
    </section>
  );
}



export { CareerForm, EducationForm, CertificateForm, SkillForm };




// utils
function AddButton({ onClick, text }: { onClick?: () => void; text?: string }) {
  return (
    <button className={styles.addButton}>
      <IconCirclePlus />
      <span>{text}</span>
    </button>
  );
}
