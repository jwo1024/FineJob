import RecruitmentInfo from "@/containers/main/RecruitmentInfo";
import HomeBanner from "@/containers/main/HomeBanner";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <main>
        <RecruitmentInfo />
      </main>
    </>
  );
}
