import styles from "@/styles/JobApplicationSuitability.module.scss";
import dynamic from "next/dynamic";

const SuitabilityChart = dynamic(() => import("./SuitabilityChart"), {
  ssr: false,
});

export default function JobApplicationSuitability() {
  return (
    <section className={styles.mainSection}>
      <h3>지원적합도</h3>
      <div>
        <SuitabilityChart
          valueCarrer={0}
          valueEducation={0}
          valueCertificate={80}
          valueSkill={70}
        />
      </div>
      <form>
        <h4>경력</h4>
        <fieldset>
          <input placeholder="회사명 *" type="text" id="username" name="username" />
          <input placeholder="부서명" type="text" id="username" name="username" />
        </fieldset>
        <fieldset>
          <input placeholder="학급/직책" type="text" id="username" name="username" />
          <input placeholder="담당직무 *" type="text" id="username" name="username" />
        </fieldset>
        <fieldset>
          <input placeholder="입사년월 *" type="text" id="username" name="username" />
          <input placeholder="퇴사년월 *" type="text" id="username" name="username" />
        </fieldset>
        <fieldset>
          <input placeholder="연봉" type="text" id="username" name="username" />
        </fieldset>
        <fieldset>
          <input placeholder="담당직무" type="text" id="username" name="username" />
        </fieldset>
      </form>
    </section>
  );
}

{
  /* <form>
  <fieldset>
    <legend>User Information</legend>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" />

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" />
  </fieldset>

  <fieldset>
    <legend>Contact Information</legend>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" />

    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" />
  </fieldset>

  <button type="submit">Submit</button>
</form> */
}
