import JobApplicationSuitability from "@/containers/job-application-suitability/JobApplicationSuitability";
import styles from "@/styles/PageMain.module.scss";

export default function TmpRoute() {
  return (
    <div className={styles.page}>
      <main>
        <JobApplicationSuitability />
      </main>
    </div>
  );
}
