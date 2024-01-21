import RecruitmentInfo from "@/containers/main/RecruitmentInfo";
import HomeBanner from "@/containers/main/HomeBanner";
import styles from "@/styles/PageMain.module.scss";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <div className={styles.page}>
        <main>
          <RecruitmentInfo />
        </main>
      </div>
    </>
  );
}
