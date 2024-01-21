import JobSearchFilter from "@/containers/recruitment-info/JobSearchFilter";
import JobSearchResult from "@/containers/recruitment-info/JobSearchResult";
import styles from "@/styles/PageMain.module.scss";

export default function recruitmentInfo() {
  return (
    <div className={styles.page}>
      <main>
        <JobSearchFilter />
        <JobSearchResult />
      </main>
    </div>
  );
}
