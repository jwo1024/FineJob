import JobSuitability from "@/containers/job-suitability/JobSuitability";
import styles from "@/styles/layout/pageLayout.module.scss";

export default function Page() {
  return (
    <section className={styles.innerPageLayout}>
      <h3>지원 적합도</h3>
      <JobSuitability />
    </section>
  );
}
