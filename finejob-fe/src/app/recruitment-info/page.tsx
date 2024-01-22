import JobSearch from "@/containers/recruitment-info/JobSearch";
import styles from "@/styles/PageMain.module.scss";

export default function recruitmentInfo() {
  return (
    <div className={styles.page}>
      <main>
        <JobSearch />
      </main>
    </div>
  );
}
