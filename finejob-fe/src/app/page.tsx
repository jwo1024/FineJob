import RecruitmentMain from "@/containers/main/RecruitmentMain";
import HomeBanner from "@/containers/main/HomeBanner";
import styles from "@/styles/PageMain.module.scss";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <div className={styles.page}>
        <main>
          <RecruitmentMain />
        </main>
      </div>
    </>
  );
}
