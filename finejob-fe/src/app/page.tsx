import HomePage from "@/containers/home/HomePage";
import HomeBanner from "@/containers/home/HomeBanner";
import styles from "@/styles/layout/pageLayout.module.scss";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <div className={styles.outerPageLayout}>
        <main className={styles.mainStyle}>
          <HomePage />
        </main>
      </div>
    </>
  );
}
